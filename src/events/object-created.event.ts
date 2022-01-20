import { auditLogsAttributes, companies, users } from '../models';

export class ObjectCreatedEvent {
  name: string;
  data: auditLogsAttributes[];
}
