import { rules } from '../models';

export const rulesProviders = [
  {
    provide: 'RULES_REPOSITORY',
    useValue: rules,
  },
];
