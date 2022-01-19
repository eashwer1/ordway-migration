import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ObjectCreatedEvent } from '../events/object-created.event';
import { AuditLogsService } from './audit-logs.service';

@Injectable()
export class ObjectCreatedListener {
  constructor(private auditLogsService: AuditLogsService) {}

  @OnEvent('*.created')
  async handleOrderCreatedEvent(event: ObjectCreatedEvent) {
    Logger.log(`Creating audit log for ${event.auditableClassName}`);
    const { user, company, ...createAuditLogDto } = event;
    try {
      await this.auditLogsService.create(createAuditLogDto, user, company);
    } catch (e) {
      Logger.log(
        `Audit log creation failed for ${event.auditableClassName}, ${event.auditableShowId}`,
      );
    }
  }
}
