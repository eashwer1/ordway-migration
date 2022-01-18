import { companies } from '../models';

export const companiesProviders = [
  {
    provide: 'COMPANIES_REPOSITORY',
    useValue: companies,
  },
];
