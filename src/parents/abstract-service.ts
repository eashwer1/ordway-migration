import { Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Request } from 'express';
import {
  camelCase,
  find,
  isEmpty,
  isEqual,
  mapKeys,
  pullAllWith,
  upperFirst,
} from 'lodash';
import { UpdateOptions } from 'sequelize';
import { Op } from 'sequelize';
import { RequestUser } from '../decorators/user.decorator';
import { ObjectCreatedEvent } from '../events/object-created.event';
import { users, companies, auditLogsAttributes } from '../models';
import { findByAttributes } from '../utils/queries/find-by-attributes';
import { IdDto } from './abstract-dto';

export abstract class CreateServiceProvider<T, TAttributes> {
  uniqueKey = 'uuid';
  constructor(private repository: any, private emitter: EventEmitter2) {}
  async create(
    dto: IdDto[],
    user: users,
    company: companies,
    assocs: string[] = [],
    idsMap = {},
    req?: Request,
  ) {
    const uniqueKeys = dto.map((c) => c[this.uniqueKey]);
    const instances = await this.findExistedConfig(uniqueKeys, company);

    const createData = dto.filter(
      (c) =>
        instances.find((i) => i[this.uniqueKey] === c[this.uniqueKey]) ===
        undefined,
    );

    const updateData = dto.filter(
      (c) =>
        instances.find((i) => i[this.uniqueKey] === c[this.uniqueKey]) !==
        undefined,
    );

    let createConfigData: TAttributes[] = createData.map((config: IdDto) => {
      let configRecordWithTimeStamp = this.updateTimestampForData(
        config,
        company,
        'create',
      );

      if (assocs.includes('user')) {
        configRecordWithTimeStamp = this.updateUserForData(
          configRecordWithTimeStamp,
          user,
          'create',
        );
      }

      configRecordWithTimeStamp = this.updateIdFromAssociation(
        assocs,
        configRecordWithTimeStamp,
        idsMap,
      );
      return configRecordWithTimeStamp;
    });

    const updateConfigData = updateData.map((config) => {
      let configRecordWithTimeStamp = this.updateTimestampForData(
        config,
        company,
        'update',
      );

      if (assocs.includes('user')) {
        configRecordWithTimeStamp = this.updateUserForData(
          configRecordWithTimeStamp,
          user,
          'update',
        );
      }

      configRecordWithTimeStamp = this.updateIdFromAssociation(
        assocs,
        configRecordWithTimeStamp,
        idsMap,
      );

      return configRecordWithTimeStamp as IdDto;
    });

    let createds = [];
    while (createConfigData.length > 0) {
      const columns = this.getColumns(createConfigData?.[0], ['id']);
      try {
        const createdLoops = await this.createConfigRecords(
          createConfigData,
          columns,
        );
        createConfigData = [];
        createds = createds.concat(createdLoops);
        this.createAuditLogEvent(createds, req, { action: 'create' });
      } catch (e) {
        const fields = mapKeys(e.fields, (_, key) =>
          camelCase(key),
        ) as TAttributes;
        const data = find(createConfigData, (d) =>
          Object.keys(fields).reduce((b, k) => b && fields[k] == d[k], true),
        );
        Logger.log(
          `Create config data length before pull for ${this.repository.name} ${createConfigData.length} ${data}`,
        );
        pullAllWith(createConfigData, [data], isEqual);
        Logger.log(
          `Create config data length after pull for ${this.repository.name} ${createConfigData.length} ${data}`,
        );
        if (e.name === 'SequelizeUniqueConstraintError') {
          try {
            const updatingColumns = this.getColumns(data, [
              ...Object.keys(fields),
              'createdAt',
              'createdById',
            ]);
            const [_, updates] = await this.updateConfigRecords(
              data,
              updatingColumns,
              {
                ...fields,
                companyId: company.id,
              },
            );
            this.createAuditLogEvent(updates?.[0], req, {
              action: 'edit',
            });
            createds.push({
              [(data as any).id]: updates?.[0],
            });
          } catch (e) {
            Logger.error(`update after create failed`, e.message);
          }
        } else {
          e.data = {
            [this.repository.name]: createConfigData,
          };
          createConfigData = [];
          throw e;
        }
      }
    }

    const updatedPromises = updateConfigData.map(
      async (updateRecord: IdDto) => {
        const { id, ...updateRecordNoID } = updateRecord;
        try {
          const fields = this.getColumns(updateRecordNoID);
          const [_, updates] = await this.updateConfigRecords(
            updateRecordNoID,
            fields,
            {
              [this.uniqueKey]: updateRecord[this.uniqueKey],
              companyId: company.id,
            },
          );

          return { [id]: updates?.[0] };
        } catch (e) {
          Logger.error(`Update failed.`, updateRecordNoID, e);
          throw e;
        }
      },
    );

    let updateds;
    try {
      updateds = await Promise.all(updatedPromises);
      const updatedValues = updateds.map((u) => Object.values(u)[0]);
      this.createAuditLogEvent(updatedValues, req, {
        action: 'edit',
      });
      updateds = updateds.map((u) => ({
        [Object.keys(u)[0]]: (Object.values(u)?.[0] as any)?.id,
      }));
    } catch (e) {
      Logger.error(e.message);
    }
    updateds = Object.assign({}, ...(updateds ?? {}));
    createds?.forEach((c, index) => {
      updateds[createData[index]?.id] = c.id;
    });

    return {
      ...updateds,
    };
  }

  async findByAttributes(
    company: companies,
    attributes?: string[],
  ): Promise<T[]> {
    return await findByAttributes(this.repository, company, attributes);
  }

  private getColumns(data = {}, skipColumns = []) {
    return Object.keys(data).filter(
      (s) => !skipColumns.includes(s),
    ) as (keyof TAttributes)[];
  }

  private async createConfigRecords(createConfigData, columns): Promise<T[]> {
    return await this.repository.bulkCreate(createConfigData, {
      fields: columns,
      returning: true,
      silent: true,
    });
  }

  private async updateConfigRecords(data, fields, where) {
    const options: UpdateOptions = {
      fields,
      returning: true,
      where,
      silent: true,
    };
    return await this.repository.update(data, options);
  }

  private async findExistedConfig(uniqueKeys, company): Promise<T[]> {
    return await this.repository.findAll({
      where: {
        [this.uniqueKey]: {
          [Op.in]: uniqueKeys,
        },
        companyId: company.id,
      },
    });
  }

  private updateIdFromAssociation(associationTables, data, idsMap) {
    associationTables.forEach((assoc) => {
      if (assoc !== 'user') data[`${assoc}Id`] = idsMap[data[`${assoc}Id`]];
    });
    return data;
  }

  private updateTimestampForData(
    data,
    company,
    action: 'create' | 'update' = 'create',
  ) {
    let newData = {
      ...data,
      companyId: company.id,
      updatedAt: new Date(),
    };

    if (action === 'create') {
      newData = {
        ...newData,
        createdAt: new Date(),
      };
    }

    return newData as TAttributes;
  }

  private updateUserForData(
    data,
    user,
    action: 'create' | 'update' = 'create',
  ) {
    let newData = {
      ...data,
      updatedById: user.id,
    };
    if (action === 'create') {
      newData = {
        ...newData,
        createdById: user.id,
      };
    }

    return newData as TAttributes;
  }

  protected async createAuditLogEvent(
    objects: IdDto[],
    req: Request,
    options: { action: 'create' | 'edit' },
  ) {
    const { user, company } = req.user as RequestUser;
    const ip = req.ip;

    const auditLogsData = new ObjectCreatedEvent();
    auditLogsData.name = typeof objects[0];
    objects = objects.filter((o) => !isEmpty(o));
    auditLogsData.data = objects?.map((obj) => {
      const objectCreatedEvent: auditLogsAttributes = {};
      objectCreatedEvent.object = (obj as any)?.dataValues ?? obj;
      objectCreatedEvent.ipAddress = ip;
      objectCreatedEvent.auditableClassName = upperFirst(this.repository.name);
      objectCreatedEvent.auditableShowId =
        obj?.[`${this.repository.name}Id`] ?? obj.id;
      objectCreatedEvent.source = 'Import Config';
      objectCreatedEvent.action = options.action;
      objectCreatedEvent.userId = user.id;
      objectCreatedEvent.companyId = company.id;
      objectCreatedEvent.createdAt = new Date();
      return objectCreatedEvent;
    });

    await this.emitter.emit(
      `${this.repository.tableName}.created`,
      auditLogsData,
    );
  }
}
