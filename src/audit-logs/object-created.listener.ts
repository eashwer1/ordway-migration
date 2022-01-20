import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ObjectCreatedEvent } from '../events/object-created.event';
import { AuditLogsService } from './audit-logs.service';

@Injectable()
export class ObjectCreatedListener {
  constructor(private auditLogsService: AuditLogsService) {}

  @OnEvent('*.created', { async: true })
  async handleOrderCreatedEvent(event: ObjectCreatedEvent) {
    Logger.log(`Creating audit log for ${event.name}`);
    try {
      await this.auditLogsService.create(event.data);
    } catch (e) {
      Logger.log(`Audit log creation failed for ${event.name}`, e.stack);
    }
  }
}
