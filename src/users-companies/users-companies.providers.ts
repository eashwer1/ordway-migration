import { usersCompanies } from '../models';

export const usersCompaniesProviders = [
  {
    provide: 'USERS_COMPANIES_REPOSITORY',
    useValue: usersCompanies,
  },
];
