import { accountTypes } from '../models/accountTypes';

export const accountTypesProviders = [
  {
    provide: 'ACCOUNT_TYPES_REPOSITORY',
    useValue: accountTypes,
  },
];
