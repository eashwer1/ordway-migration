import { roles } from '../models';

export const rolesProviders = [
  {
    provide: 'ROLES_REPOSITORY',
    useValue: roles,
  },
];
