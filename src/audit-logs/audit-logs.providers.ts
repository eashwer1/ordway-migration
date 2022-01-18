import { auditLogs } from '../models';

export const auditLogsProviders = [
  {
    provide: 'AUDIT_LOGS_REPOSITORY',
    useValue: auditLogs,
  },
];
