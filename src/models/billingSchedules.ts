import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface billingSchedulesAttributes {
  id?: number;
  billingScheduleId?: string;
  productName?: string;
  planId?: string;
  planName?: string;
  chargeExternalId?: string;
  chargeName?: string;
  chargeType?: string;
  chargeTiming?: string;
  price?: number;
  quantity?: number;
  discount?: number;
  effectivePrice?: string;
  includedQuantity?: number;
  mrr?: string;
  act?: string;
  tcv?: string;
  amountInvoiced?: string;
  createdDate?: Date;
  updatedDate?: Date;
  createdById?: number;
  updatedById?: number;
  subscriptionId?: number;
  customerId?: number;
  companyId?: number;
  productId?: string;
  startDate?: Date;
  endDate?: Date;
  discountedMrr?: string;
  priceBase?: string;
  billingPeriodId?: number;
  customFields?: object;
  cancelledAt?: string;
  unusedPrepaymentUnits?: number;
  totalPrepaymentUnits?: number;
}

@Table({ tableName: 'billing_schedules', timestamps: false })
export class billingSchedules
  extends Model<billingSchedulesAttributes, billingSchedulesAttributes>
  implements billingSchedulesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('billing_schedules_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'billing_schedule_id',
    allowNull: true,
    type: DataType.STRING,
  })
  billingScheduleId?: string;

  @Column({ field: 'product_name', allowNull: true, type: DataType.STRING })
  productName?: string;

  @Column({ field: 'plan_id', allowNull: true, type: DataType.STRING })
  planId?: string;

  @Column({ field: 'plan_name', allowNull: true, type: DataType.STRING })
  planName?: string;

  @Column({
    field: 'charge_external_id',
    allowNull: true,
    type: DataType.STRING,
  })
  chargeExternalId?: string;

  @Column({ field: 'charge_name', allowNull: true, type: DataType.STRING })
  chargeName?: string;

  @Column({ field: 'charge_type', allowNull: true, type: DataType.STRING })
  chargeType?: string;

  @Column({ field: 'charge_timing', allowNull: true, type: DataType.STRING })
  chargeTiming?: string;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0'),
  })
  price?: number;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0'),
  })
  quantity?: number;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  discount?: number;

  @Column({
    field: 'effective_price',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  effectivePrice?: string;

  @Column({
    field: 'included_quantity',
    allowNull: true,
    type: DataType.INTEGER,
  })
  includedQuantity?: number;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  mrr?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  act?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  tcv?: string;

  @Column({
    field: 'amount_invoiced',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  amountInvoiced?: string;

  @Column({ field: 'created_date', allowNull: true, type: DataType.DATE(6) })
  createdDate?: Date;

  @Column({ field: 'updated_date', allowNull: true, type: DataType.DATE(6) })
  updatedDate?: Date;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'subscription_id', allowNull: true, type: DataType.INTEGER })
  subscriptionId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'product_id', allowNull: true, type: DataType.STRING })
  productId?: string;

  @Column({ field: 'start_date', allowNull: true, type: DataType.DATE(6) })
  startDate?: Date;

  @Column({ field: 'end_date', allowNull: true, type: DataType.DATE(6) })
  endDate?: Date;

  @Column({
    field: 'discounted_mrr',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  discountedMrr?: string;

  @Column({ field: 'price_base', allowNull: true, type: DataType.STRING })
  priceBase?: string;

  @Column({
    field: 'billing_period_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  billingPeriodId?: number;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({ field: 'cancelled_at', allowNull: true, type: DataType.STRING })
  cancelledAt?: string;

  @Column({
    field: 'unused_prepayment_units',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  unusedPrepaymentUnits?: number;

  @Column({
    field: 'total_prepayment_units',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  totalPrepaymentUnits?: number;
}
