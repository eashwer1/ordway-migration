import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface paymentRunsAttributes {
  id?: number;
  paymentRunId?: string;
  targetDate?: Date;
  successCount?: number;
  failureCount?: number;
  paymentsTotalValue?: number;
  paymentsSuccessValue?: number;
  paymentsFailedValue?: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  status?: string;
  filterOptions?: object;
  declineEmail?: boolean;
  successEmail?: boolean;
  refundEmail?: boolean;
  paymentPerCustomer?: boolean;
  processNegativeInvoices?: boolean;
  refundsSuccessValue?: number;
  refundsFailedValue?: number;
  refundsTotalValue?: number;
  paymentRunScheduleId?: number;
  originalInvoices?: any;
  retryFailedPayment?: boolean;
  autoApplyCredits?: boolean;
}

@Table({ tableName: 'payment_runs', timestamps: false })
export class paymentRuns
  extends Model<paymentRunsAttributes, paymentRunsAttributes>
  implements paymentRunsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('payment_runs_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'payment_run_id', allowNull: true, type: DataType.STRING })
  paymentRunId?: string;

  @Column({ field: 'target_date', allowNull: true, type: DataType.DATE(6) })
  targetDate?: Date;

  @Column({
    field: 'success_count',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  successCount?: number;

  @Column({
    field: 'failure_count',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  failureCount?: number;

  @Column({
    field: 'payments_total_value',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  paymentsTotalValue?: number;

  @Column({
    field: 'payments_success_value',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  paymentsSuccessValue?: number;

  @Column({
    field: 'payments_failed_value',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  paymentsFailedValue?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'in progress'::character varying"),
  })
  status?: string;

  @Column({
    field: 'filter_options',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  filterOptions?: object;

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
    field: 'refund_email',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  refundEmail?: boolean;

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
    field: 'refunds_success_value',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  refundsSuccessValue?: number;

  @Column({
    field: 'refunds_failed_value',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  refundsFailedValue?: number;

  @Column({
    field: 'refunds_total_value',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  refundsTotalValue?: number;

  @Column({
    field: 'payment_run_schedule_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  paymentRunScheduleId?: number;

  @Column({
    field: 'original_invoices',
    allowNull: true,
    defaultValue: Sequelize.literal("'{}'::integer[]"),
    type: DataType.ARRAY(DataType.INTEGER),
  })
  originalInvoices?: any;

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
}
