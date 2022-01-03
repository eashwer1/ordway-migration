import { roles } from 'src/models';

export const rolesProviders = [
  {
    provide: 'ROLES_REPOSITORY',
    useValue: roles,
  },
];
