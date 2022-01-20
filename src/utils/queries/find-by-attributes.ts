import { camelCase, isEmpty } from 'lodash';
import { FindOptions, Op, ProjectionAlias } from 'sequelize';
import { companies } from '../../models';

export async function findByAttributes<T>(
  repository,
  company: companies,
  attributes?: string[],
): Promise<T[]> {
  let findParams: FindOptions = {
    where: { company_id: { [Op.eq]: company.id } },
  };

  if (!isEmpty(attributes)) {
    attributes = [...attributes, 'id', 'uuid'];
    const attributesCamelCase = attributes.map(
      (a) => [a, camelCase(a)] as ProjectionAlias,
    );
    findParams = {
      attributes: attributesCamelCase,
      ...findParams,
    };
  }

  return (await repository.findAll(findParams)) as T[];
}
