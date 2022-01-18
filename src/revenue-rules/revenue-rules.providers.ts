import { revenueRules } from '../models';

export const revenueRulesProviders = [
  {
    provide: 'REVENUE_RULES_REPOSITORY',
    useValue: revenueRules,
  },
];
