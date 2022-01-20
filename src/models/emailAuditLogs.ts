import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface emailAuditLogsAttributes {
  id?: number;
  companyId?: number;
  customerId?: number;
  auditableId?: string;
  auditableType?: string;
  emailStatus?: string;
  emailThreadMessageId?: number;
  notes?: string;
  metadata?: object;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'email_audit_logs', timestamps: false })
export class emailAuditLogs
  extends Model<emailAuditLogsAttributes, emailAuditLogsAttributes>
  implements emailAuditLogsAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('email_audit_logs_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'auditable_id', allowNull: true, type: DataType.STRING })
  auditableId?: string;

  @Column({ field: 'auditable_type', allowNull: true, type: DataType.STRING })
  auditableType?: string;

  @Column({
    field: 'email_status',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'succeeded'::character varying"),
  })
  emailStatus?: string;

  @Column({
    field: 'email_thread_message_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  emailThreadMessageId?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  notes?: string;

  @Column({ allowNull: true, type: DataType.JSONB })
  metadata?: object;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
