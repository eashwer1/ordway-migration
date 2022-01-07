import { Logger } from '@nestjs/common';
import axios from 'axios';
import ConfigMetadata from 'src/interfaces/metadata.interfaces';
import { users, companies } from 'src/models';

async function getModulesMetadata(
  tableNames: string[],
  user: users,
  company: companies,
): Promise<ConfigMetadata> {
  const ordwayAppUrl: string = process.env.ORDWAYAPPURL;
  const objectKeys = tableNames?.map((t) => ({ name: t }));
  try {
    const metadata = await axios.post(
      `${ordwayAppUrl}/api/v1/metadata`,
      { object_keys: objectKeys },
      {
        headers: {
          'X-User-Token': user.authenticationToken,
          'X-User-Email': user.email,
          'X-User-companies': company.name,
        },
      },
    );
    return metadata.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      Logger.error(error.message);
      Logger.error(error.stack);
    } else {
      Logger.error(error.message);
      Logger.error(error.stack);
    }
  }
  return {} as ConfigMetadata;
}

export async function getTablesOrder(
  names: string[],
  user: users,
  company: companies,
) {
  const modulesMetadata = await getModulesMetadata(names, user, company);
  let orderOfTables = ['user'];
  while (names.length > 0) {
    names.forEach((n, index) => {
      const associations = modulesMetadata[n]?.associations;
      if (associations === undefined) {
        orderOfTables.push(n);
        names.splice(index, 1);
      } else {
        associations.forEach((a, index) => {
          if (orderOfTables.includes(a)) {
            associations.splice(index, 1);
          }
        });
        if (associations.length === 0) {
          orderOfTables.push(n);
          names.splice(index, 1);
        }
      }
    });
  }
  orderOfTables = orderOfTables.splice(1);
  const orderOfTablesAndAssoc = orderOfTables.map((table) => ({
    [table]: modulesMetadata[table].associations,
  }));

  return orderOfTablesAndAssoc;
}
