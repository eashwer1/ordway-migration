import { companies, users } from '../models';

export class ObjectCreatedEvent {
  object: object;
  source: string;
  action = 'create';
  ipAddress: string;
  auditableClassName: string;
  auditableShowId: string;
  user: users;
  company: companies;
}
