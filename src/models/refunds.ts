import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface refundsAttributes {
  id?: number;
  refundId?: string;
  companyId?: number;
  refundDate?: Date;
  refundAmount?: string;
  refundType?: string;
  customerId?: number;
  paymentId?: number;
  creditId?: number;
  invoiceId?: number;
  referenceNumber?: string;
  notes?: string;
  paymentRunId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  refundStatus?: string;
  failureReason?: string;
  customFields?: object;
  conversionRate?: number;
  chartOfAccountId?: number;
}

@Table({ tableName: 'refunds', timestamps: false })
export class refunds
  extends Model<refundsAttributes, refundsAttributes>
  implements refundsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('refunds_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'refund_id', allowNull: true, type: DataType.STRING })
  refundId?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'refund_date', allowNull: true, type: DataType.DATE(6) })
  refundDate?: Date;

  @Column({ field: 'refund_amount', allowNull: true, type: DataType.BIGINT })
  refundAmount?: string;

  @Column({ field: 'refund_type', allowNull: true, type: DataType.STRING })
  refundType?: string;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'payment_id', allowNull: true, type: DataType.INTEGER })
  paymentId?: number;

  @Column({ field: 'credit_id', allowNull: true, type: DataType.INTEGER })
  creditId?: number;

  @Column({ field: 'invoice_id', allowNull: true, type: DataType.INTEGER })
  invoiceId?: number;

  @Column({
    field: 'reference_number',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  referenceNumber?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  notes?: string;

  @Column({ field: 'payment_run_id', allowNull: true, type: DataType.INTEGER })
  paymentRunId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'refund_status',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'succeeded'::character varying"),
  })
  refundStatus?: string;

  @Column({ field: 'failure_reason', allowNull: true, type: DataType.STRING })
  failureReason?: string;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({
    field: 'conversion_rate',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('1.0'),
  })
  conversionRate?: number;

  @Column({
    field: 'chart_of_account_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  chartOfAccountId?: number;
}
