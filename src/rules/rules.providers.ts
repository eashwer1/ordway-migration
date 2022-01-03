import { rules } from 'src/models';

export const rulesProviders = [
  {
    provide: 'RULES_REPOSITORY',
    useValue: rules,
  },
];
