import { isEmpty } from 'lodash';
import { FindOptions, Op } from 'sequelize';
import { companies } from 'src/models';

export async function findByAttributes<T>(
  repository,
  company: companies,
  attributes?: string[],
): Promise<T[]> {
  let findParams: FindOptions = {
    where: { company_id: { [Op.eq]: company.id } },
  };
  if (!isEmpty(attributes)) {
    findParams = { attributes, ...findParams };
  }

  return (await repository.findAll(findParams)) as T[];
}
