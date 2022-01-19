import { users } from '../models';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: users,
  },
];
