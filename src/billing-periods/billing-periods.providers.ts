import { billingPeriods } from '../models';

export const billingPeriodsProviders = [
  {
    provide: 'BILLING_PERIODS_REPOSITORY',
    useValue: billingPeriods,
  },
];
