import { companies } from 'src/models';

export const companiesProviders = [
  {
    provide: 'COMPANIES_REPOSITORY',
    useValue: companies,
  },
];
