import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface webhookLogsAttributes {
  id?: number;
  code?: number;
  response?: string;
  webhookEventId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  action?: string;
  requestIp?: string;
  requestBody?: object;
  createdById?: number;
  updatedById?: number;
  eventId?: string;
  url?: string;
  body?: object;
  logEventName?: string;
  parentId?: number;
  companyId?: number;
}

@Table({ tableName: 'webhook_logs', timestamps: false })
export class webhookLogs
  extends Model<webhookLogsAttributes, webhookLogsAttributes>
  implements webhookLogsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('webhook_logs_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  code?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  response?: string;

  @Column({
    field: 'webhook_event_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  webhookEventId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ allowNull: true, type: DataType.STRING })
  action?: string;

  @Column({ field: 'request_ip', allowNull: true, type: DataType.STRING })
  requestIp?: string;

  @Column({ field: 'request_body', allowNull: true, type: DataType.JSONB })
  requestBody?: object;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'event_id', allowNull: true, type: DataType.STRING })
  eventId?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'undefined'::character varying"),
  })
  url?: string;

  @Column({ allowNull: true, type: DataType.JSONB })
  body?: object;

  @Column({
    field: 'log_event_name',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'undefined'::character varying"),
  })
  logEventName?: string;

  @Column({ field: 'parent_id', allowNull: true, type: DataType.INTEGER })
  parentId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;
}
