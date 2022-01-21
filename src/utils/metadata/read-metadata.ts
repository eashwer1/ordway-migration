import { flatten, mapValues, values } from 'lodash';
import ConfigMetadata, {
  ConfigField,
} from '../../interfaces/metadata.interfaces';
import * as pluralize from 'pluralize';
import axios from 'axios';
import { users, companies } from '../../models';
import { Logger } from '@nestjs/common';

export async function getAllMetadataFields(
  user: users,
  company: companies,
): Promise<ConfigField[]> {
  const metadata = await getMetadata(user, company);
  const allFields = flatten(values(mapValues(metadata, 'fields')));
  const fields = allFields.filter((f) => {
    const adminEnabled = f.adminEnabled ?? false;
    const superUser = user.superUser;
    return adminEnabled ? adminEnabled === superUser : true;
  });
  return fields;
}

export async function getMetadataTableNames(
  user: users,
  company: companies,
): Promise<string[]> {
  const allFields = await getAllMetadataFields(user, company);
  const tableNames = allFields.map((l) =>
    pluralize.plural(l?.definition?.object_name?.toLowerCase()),
  );
  const tables = new Set<string>(tableNames);
  return Array.from(tables);
}

export default async function getMetadata(
  user: users,
  company: companies,
): Promise<ConfigMetadata> {
  const ordwayAppUrl: string = process.env.ORDWAYAPPURL;
  try {
    const metadata = await axios.get(`${ordwayAppUrl}/api/v1/metadata/config`, {
      headers: {
        'X-User-Token': user.authenticationToken,
        'X-User-Email': user.email,
        'X-User-Company': company.name,
      },
    });
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
