import { permissions } from 'src/models';

export const permissionsProviders = [
  {
    provide: 'PERMISSIONS_REPOSITORY',
    useValue: permissions,
  },
];
