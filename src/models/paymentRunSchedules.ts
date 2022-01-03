import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface paymentRunSchedulesAttributes {
  id?: number;
  cronTargetDate?: string;
  triggeringBySchedule?: boolean;
  companyId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  declineEmail?: boolean;
  successEmail?: boolean;
  paymentPerCustomer?: boolean;
  processNegativeInvoices?: boolean;
  enabled?: boolean;
  paymentRunScheduleId?: string;
  invoiceFilters?: object;
  targetTimeFrame?: number;
  retryFailedPayment?: boolean;
  autoApplyCredits?: boolean;
  executionOrder?: number;
}

@Table({ tableName: 'payment_run_schedules', timestamps: false })
export class paymentRunSchedules
  extends Model<paymentRunSchedulesAttributes, paymentRunSchedulesAttributes>
  implements paymentRunSchedulesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('payment_run_schedules_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'cron_target_date', allowNull: true, type: DataType.STRING })
  cronTargetDate?: string;

  @Column({
    field: 'triggering_by_schedule',
    allowNull: true,
    type: DataType.BOOLEAN,
  })
  triggeringBySchedule?: boolean;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'decline_email',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  declineEmail?: boolean;

  @Column({
    field: 'success_email',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  successEmail?: boolean;

  @Column({
    field: 'payment_per_customer',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  paymentPerCustomer?: boolean;

  @Column({
    field: 'process_negative_invoices',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  processNegativeInvoices?: boolean;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  enabled?: boolean;

  @Column({
    field: 'payment_run_schedule_id',
    allowNull: true,
    type: DataType.STRING,
  })
  paymentRunScheduleId?: string;

  @Column({
    field: 'invoice_filters',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  invoiceFilters?: object;

  @Column({
    field: 'target_time_frame',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  targetTimeFrame?: number;

  @Column({
    field: 'retry_failed_payment',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  retryFailedPayment?: boolean;

  @Column({
    field: 'auto_apply_credits',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  autoApplyCredits?: boolean;

  @Column({
    field: 'execution_order',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  executionOrder?: number;
}
