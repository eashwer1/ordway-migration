import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface paymentsAttributes {
  id?: number;
  paymentId?: string;
  customerId?: number;
  createdById?: number;
  updatedById?: number;
  status?: string;
  paymentDate?: string;
  paymentAmount?: string;
  paymentMethod?: string;
  paymentType?: string;
  referenceNumber?: string;
  appliedAmount?: string;
  unappliedAmount?: string;
  autoApply?: boolean;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
  companyId?: number;
  paymentRunId?: number;
  refundedAmount?: string;
  customFields?: object;
  failureReason?: string;
  conversionRate?: number;
  electronicMethodId?: number;
  feeAmount?: number;
  chartOfAccountId?: number;
  refundedOn?: string;
  emailStatus?: boolean;
  failedAttempt?: number;
  gatewayId?: number;
  currencyId?: number;
  parentId?: number;
}

@Table({ tableName: 'payments', timestamps: false })
export class payments
  extends Model<paymentsAttributes, paymentsAttributes>
  implements paymentsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('payments_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'payment_id', allowNull: true, type: DataType.STRING })
  paymentId?: string;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  status?: string;

  @Column({ field: 'payment_date', allowNull: true, type: DataType.STRING })
  paymentDate?: string;

  @Column({
    field: 'payment_amount',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  paymentAmount?: string;

  @Column({ field: 'payment_method', allowNull: true, type: DataType.STRING })
  paymentMethod?: string;

  @Column({ field: 'payment_type', allowNull: true, type: DataType.STRING })
  paymentType?: string;

  @Column({ field: 'reference_number', allowNull: true, type: DataType.STRING })
  referenceNumber?: string;

  @Column({
    field: 'applied_amount',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  appliedAmount?: string;

  @Column({
    field: 'unapplied_amount',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  unappliedAmount?: string;

  @Column({
    field: 'auto_apply',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  autoApply?: boolean;

  @Column({ allowNull: true, type: DataType.STRING })
  notes?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'payment_run_id', allowNull: true, type: DataType.INTEGER })
  paymentRunId?: number;

  @Column({
    field: 'refunded_amount',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  refundedAmount?: string;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({ field: 'failure_reason', allowNull: true, type: DataType.STRING })
  failureReason?: string;

  @Column({
    field: 'conversion_rate',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('1.0'),
  })
  conversionRate?: number;

  @Column({
    field: 'electronic_method_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  electronicMethodId?: number;

  @Column({
    field: 'fee_amount',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  feeAmount?: number;

  @Column({
    field: 'chart_of_account_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  chartOfAccountId?: number;

  @Column({ field: 'refunded_on', allowNull: true, type: DataType.STRING })
  refundedOn?: string;

  @Column({
    field: 'email_status',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  emailStatus?: boolean;

  @Column({
    field: 'failed_attempt',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  failedAttempt?: number;

  @Column({ field: 'gateway_id', allowNull: true, type: DataType.INTEGER })
  gatewayId?: number;

  @Column({ field: 'currency_id', allowNull: true, type: DataType.INTEGER })
  currencyId?: number;

  @Column({ field: 'parent_id', allowNull: true, type: DataType.INTEGER })
  parentId?: number;
}
