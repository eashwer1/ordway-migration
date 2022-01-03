import { revenueRules } from 'src/models';

export const revenueRulesProviders = [
  {
    provide: 'REVENUE_RULES_REPOSITORY',
    useValue: revenueRules,
  },
];
