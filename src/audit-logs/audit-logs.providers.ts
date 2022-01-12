import { auditLogs } from 'src/models';

export const auditLogsProviders = [
  {
    provide: 'AUDIT_LOGS_REPOSITORY',
    useValue: auditLogs,
  },
];
