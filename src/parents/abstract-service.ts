import { Logger } from '@nestjs/common';
import { Op } from 'sequelize';
import { users, companies } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { IdDto } from './abstract-dto';

export abstract class CreateServiceProvider<T, TAttributes> {
  uniqueKey = 'uuid';
  constructor(private repository: any) {}
  async create(
    dto: IdDto[],
    user: users,
    company: companies,
    assocs: string[] = [],
    idsMap = {},
  ) {
    const uniqueKeys = dto.map((c) => c[this.uniqueKey]);
    const instances = await this.repository.findAll({
      where: {
        [this.uniqueKey]: {
          [Op.in]: uniqueKeys,
        },
        companyId: company.id,
      },
    });

    const createData = dto.filter(
      (c) =>
        instances.find((i) => i[this.uniqueKey] === c[this.uniqueKey]) ===
        undefined,
    );

    let updateData = dto.filter(
      (c) =>
        instances.find((i) => i[this.uniqueKey] === c[this.uniqueKey]) !==
        undefined,
    );

    const createAccountTypesNoIds = createData.map((c: IdDto) => {
      const { ...accountTypes } = c;

      let dataWithoutUser: {
        companyId?: number;
        createdAt?: Date;
        updatedAt?: Date;
        createdById?: number;
        updatedById?: number;
      } = {
        ...accountTypes,
        companyId: company.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      if (assocs.includes('user')) {
        dataWithoutUser = {
          ...dataWithoutUser,
          createdById: user.id,
          updatedById: user.id,
        };
      }

      assocs.forEach((assoc) => {
        if (assoc !== 'user')
          dataWithoutUser[`${assoc}Id`] = idsMap[dataWithoutUser[`${assoc}Id`]];
      });

      return dataWithoutUser;
    });

    updateData = updateData.map((c) => {
      let dataWithoutUser: {
        companyId?: number;
        updatedAt?: Date;
        updatedById?: number;
      } = {
        ...c,
        companyId: company.id,
        updatedAt: new Date(),
      };

      if (assocs.includes('user')) {
        dataWithoutUser = {
          ...dataWithoutUser,
          updatedById: user.id,
        };
      }

      assocs.forEach((assoc) => {
        if (assoc !== 'user')
          dataWithoutUser[`${assoc}Id`] = idsMap[dataWithoutUser[`${assoc}Id`]];
      });

      return dataWithoutUser as IdDto;
    });

    let createds;
    if (createAccountTypesNoIds.length > 0) {
      const columns = Object.keys(
        createAccountTypesNoIds?.[0] ?? {},
      ) as (keyof TAttributes)[];
      try {
        createds = await this.repository.bulkCreate(createAccountTypesNoIds, {
          fields: columns,
          returning: this.uniqueKey,
        });
      } catch (e) {
        Logger.error(createAccountTypesNoIds, e);
        throw e;
      }
    }

    const updatedPromises = updateData.map(async (updateRecord: IdDto) => {
      const { id, ...updateRecordNoID } = updateRecord;

      try {
        const [_, updates] = await this.repository.update(updateRecordNoID, {
          where: {
            [this.uniqueKey]: updateRecord[this.uniqueKey],
            companyId: company.id,
          },
          returning: true,
        });
        return { [id]: updates[0].id };
      } catch (e) {
        Logger.error(updateRecordNoID, e);
        throw e;
      }
    });
    let updateds;
    try {
      updateds = await Promise.all(updatedPromises);
    } catch (e) {
      Logger.error(e.message);
    }
    updateds = Object.assign({}, ...updateds);
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
}
