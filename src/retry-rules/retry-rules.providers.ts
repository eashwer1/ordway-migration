import { retryRules } from '../models';

export const retryRulesProviders = [
  {
    provide: 'RETRY_RULES_REPOSITORY',
    useValue: retryRules,
  },
];
