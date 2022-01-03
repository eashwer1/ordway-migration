import { retryRules } from 'src/models';

export const retryRulesProviders = [
  {
    provide: 'RETRY_RULES_REPOSITORY',
    useValue: retryRules,
  },
];
