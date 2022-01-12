import { Module } from '@nestjs/common';
import { AuditLogsService } from './audit-logs.service';
import { AuditLogsController } from './audit-logs.controller';
import { auditLogsProviders } from './audit-logs.providers';
import { ObjectCreatedListener } from './object-created.listener';

@Module({
  controllers: [AuditLogsController],
  providers: [AuditLogsService, ...auditLogsProviders, ObjectCreatedListener],
})
export class AuditLogsModule {}
