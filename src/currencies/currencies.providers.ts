import { currencies } from 'src/models';

export const currenciesProviders = [
  {
    provide: 'CURRENCIES_REPOSITORY',
    useValue: currencies,
  },
];
