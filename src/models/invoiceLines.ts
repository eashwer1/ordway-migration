import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface invoiceLinesAttributes {
  id?: number;
  subscriptionId?: number;
  productId?: string;
  productName?: string;
  planId?: string;
  planName?: string;
  chargeExternalId?: string;
  chargeName?: string;
  chargeType?: string;
  chargeReadyDate?: Date;
  startDate?: Date;
  endDate?: Date;
  includedQuantity?: string;
  qty?: number;
  price?: number;
  discount?: string;
  proratedAmount?: string;
  discountedAmount?: string;
  discountedProratedAmount?: string;
  effectivePrice?: string;
  createdDate?: Date;
  updatedDate?: Date;
  createdById?: number;
  updatedById?: number;
  externalOrderId?: string;
  orderDate?: Date;
  billingScheduleLineId?: number;
  invoiceId?: number;
  companyId?: number;
  orderId?: number;
  userDefinedSubscriptionId?: string;
  description?: string;
  taxable?: boolean;
  priceBase?: string;
  lineNo?: number;
  pricingMethod?: string;
  customFields?: object;
  prepaymentPeriod?: number;
  prepayment?: boolean;
  lineTax?: string;
  appliedTiers?: object;
  listPrice?: number;
  fmvAllocationEnabled?: boolean;
  fmvAllocation?: string;
  revenueScheduleLineId?: number;
  revenueScheduleId?: number;
}

@Table({ tableName: 'invoice_lines', timestamps: false })
export class invoiceLines
  extends Model<invoiceLinesAttributes, invoiceLinesAttributes>
  implements invoiceLinesAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('invoice_lines_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'subscription_id', allowNull: true, type: DataType.INTEGER })
  subscriptionId?: number;

  @Column({ field: 'product_id', allowNull: true, type: DataType.STRING })
  productId?: string;

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

  @Column({
    field: 'charge_ready_date',
    allowNull: true,
    type: DataType.DATE(6),
  })
  chargeReadyDate?: Date;

  @Column({ field: 'start_date', allowNull: true, type: DataType.DATE(6) })
  startDate?: Date;

  @Column({ field: 'end_date', allowNull: true, type: DataType.DATE(6) })
  endDate?: Date;

  @Column({
    field: 'included_quantity',
    allowNull: true,
    type: DataType.BIGINT,
  })
  includedQuantity?: string;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  qty?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  price?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  discount?: string;

  @Column({ field: 'prorated_amount', allowNull: true, type: DataType.BIGINT })
  proratedAmount?: string;

  @Column({
    field: 'discounted_amount',
    allowNull: true,
    type: DataType.BIGINT,
  })
  discountedAmount?: string;

  @Column({
    field: 'discounted_prorated_amount',
    allowNull: true,
    type: DataType.BIGINT,
  })
  discountedProratedAmount?: string;

  @Column({ field: 'effective_price', allowNull: true, type: DataType.BIGINT })
  effectivePrice?: string;

  @Column({ field: 'created_date', allowNull: true, type: DataType.DATE(6) })
  createdDate?: Date;

  @Column({ field: 'updated_date', allowNull: true, type: DataType.DATE(6) })
  updatedDate?: Date;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({
    field: 'external_order_id',
    allowNull: true,
    type: DataType.STRING,
  })
  externalOrderId?: string;

  @Column({ field: 'order_date', allowNull: true, type: DataType.DATE(6) })
  orderDate?: Date;

  @Column({
    field: 'billing_schedule_line_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  billingScheduleLineId?: number;

  @Column({ field: 'invoice_id', allowNull: true, type: DataType.INTEGER })
  invoiceId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'order_id', allowNull: true, type: DataType.INTEGER })
  orderId?: number;

  @Column({
    field: 'user_defined_subscription_id',
    allowNull: true,
    type: DataType.STRING,
  })
  userDefinedSubscriptionId?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  taxable?: boolean;

  @Column({ field: 'price_base', allowNull: true, type: DataType.STRING })
  priceBase?: string;

  @Column({ field: 'line_no', allowNull: true, type: DataType.INTEGER })
  lineNo?: number;

  @Column({
    field: 'pricing_method',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'per_unit'::character varying"),
  })
  pricingMethod?: string;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({
    field: 'prepayment_period',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  prepaymentPeriod?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  prepayment?: boolean;

  @Column({
    field: 'line_tax',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  lineTax?: string;

  @Column({ field: 'applied_tiers', allowNull: true, type: DataType.JSONB })
  appliedTiers?: object;

  @Column({ field: 'list_price', allowNull: true, type: DataType.DOUBLE })
  listPrice?: number;

  @Column({
    field: 'fmv_allocation_enabled',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  fmvAllocationEnabled?: boolean;

  @Column({
    field: 'fmv_allocation',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  fmvAllocation?: string;

  @Column({
    field: 'revenue_schedule_line_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  revenueScheduleLineId?: number;

  @Column({
    field: 'revenue_schedule_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  revenueScheduleId?: number;
}
