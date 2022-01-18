import { currencies } from '../models';

export const currenciesProviders = [
  {
    provide: 'CURRENCIES_REPOSITORY',
    useValue: currencies,
  },
];
