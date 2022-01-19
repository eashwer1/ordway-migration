import { taxes } from '../models';

export const taxesProviders = [
  {
    provide: 'TAXES_REPOSITORY',
    useValue: taxes,
  },
];
