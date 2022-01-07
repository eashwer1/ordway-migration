import { Logger } from '@nestjs/common';
import { Op } from 'sequelize';
import { users, companies } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { IdDto } from './abstract-dto';

export abstract class CreateServiceProvider<T, TAttributes> {
  constructor(private uniqueKey: string, private repository: any) {}
  async create(dto: IdDto[], _user: users, company: companies, _idsMap?) {
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
      const { id, ...accountTypes } = c;
      return {
        ...accountTypes,
        companyId: company.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    updateData = updateData.map((c) => ({
      ...c,
      updatedAt: new Date(),
    }));

    let createds;
    if (createAccountTypesNoIds.length > 0) {
      const columns = Object.keys(
        createAccountTypesNoIds?.[0] ?? {},
      ) as (keyof TAttributes)[];
      createds = await this.repository.bulkCreate(createAccountTypesNoIds, {
        fields: columns,
        returning: ['accountType', 'id'],
      });
    }

    const updatedPromises = updateData.map(async (updateRecord: IdDto) => {
      const { id, ...updateRecordNoID } = updateRecord;
      const [_, updates] = await this.repository.update(updateRecordNoID, {
        where: {
          accountType: updateRecord[this.uniqueKey],
          companyId: company.id,
        },
        returning: true,
      });
      return { [id]: updates[0].id };
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
