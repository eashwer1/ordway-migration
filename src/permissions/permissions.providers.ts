import { permissions } from '../models';

export const permissionsProviders = [
  {
    provide: 'PERMISSIONS_REPOSITORY',
    useValue: permissions,
  },
];
