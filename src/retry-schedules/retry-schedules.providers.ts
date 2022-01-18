import { retrySchedules } from '../models';

export const retrySchedulesProviders = [
  {
    provide: 'RETRY_SCHEDULES_REPOSITORY',
    useValue: retrySchedules,
  },
];
