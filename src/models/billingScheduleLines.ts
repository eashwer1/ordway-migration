import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface billingScheduleLinesAttributes {
  id?: number;
  productName?: string;
  planId?: string;
  planName?: string;
  chargeExternalId?: string;
  chargeName?: string;
  chargeType?: string;
  chargeReadyDate?: Date;
  startDate?: Date;
  endDate?: Date;
  includedQuantity?: number;
  quantity?: number;
  price?: number;
  discount?: number;
  effectivePrice?: string;
  invoiced?: boolean;
  createdDate?: Date;
  updatedDate?: Date;
  createdById?: number;
  updatedById?: number;
  billingScheduleId?: number;
  customerId?: number;
  invoiceId?: number;
  companyId?: number;
  productId?: string;
  subscriptionId?: number;
  latest?: boolean;
  priceBase?: string;
  pricingMethod?: string;
  couponLine?: boolean;
  conversionRate?: number;
  prepayment?: boolean;
  customFields?: object;
  prepaymentPeriod?: number;
  closedFpContract?: number;
  userDriven?: boolean;
  bonus?: boolean;
  unusedPrepaymentUnits?: number;
  chargeIncludedUnits?: number;
  lineType?: number;
  prepaymentUnits?: number;
  parentLink?: number;
  appliedTiers?: object;
  prepaidUnitsExpiry?: number;
  listPrice?: number;
  listPriceBase?: string;
  fmvAllocationEnabled?: boolean;
  fmvEffectivePrice?: number;
  fmvAllocation?: string;
  expiredUnits?: string;
  subscriptionChargeId?: number;
  regularLineLink?: number;
  uid?: string;
  parentUid?: string;
  tierOffset?: number;
  seq?: number;
  usageData?: object;
}

@Table({ tableName: 'billing_schedule_lines', timestamps: false })
export class billingScheduleLines
  extends Model<billingScheduleLinesAttributes, billingScheduleLinesAttributes>
  implements billingScheduleLinesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('billing_schedule_lines_id_seq'::regclass)",
    ),
  })
  id?: number;

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
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  includedQuantity?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  quantity?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  price?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  discount?: number;

  @Column({ field: 'effective_price', allowNull: true, type: DataType.BIGINT })
  effectivePrice?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  invoiced?: boolean;

  @Column({ field: 'created_date', allowNull: true, type: DataType.DATE(6) })
  createdDate?: Date;

  @Column({ field: 'updated_date', allowNull: true, type: DataType.DATE(6) })
  updatedDate?: Date;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({
    field: 'billing_schedule_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  billingScheduleId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'invoice_id', allowNull: true, type: DataType.INTEGER })
  invoiceId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'product_id', allowNull: true, type: DataType.STRING })
  productId?: string;

  @Column({ field: 'subscription_id', allowNull: true, type: DataType.INTEGER })
  subscriptionId?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  latest?: boolean;

  @Column({ field: 'price_base', allowNull: true, type: DataType.STRING })
  priceBase?: string;

  @Column({
    field: 'pricing_method',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'per_unit'::character varying"),
  })
  pricingMethod?: string;

  @Column({
    field: 'coupon_line',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  couponLine?: boolean;

  @Column({
    field: 'conversion_rate',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('1.0'),
  })
  conversionRate?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  prepayment?: boolean;

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
    field: 'closed_fp_contract',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  closedFpContract?: number;

  @Column({
    field: 'user_driven',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  userDriven?: boolean;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  bonus?: boolean;

  @Column({
    field: 'unused_prepayment_units',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  unusedPrepaymentUnits?: number;

  @Column({
    field: 'charge_included_units',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  chargeIncludedUnits?: number;

  @Column({
    field: 'line_type',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  lineType?: number;

  @Column({
    field: 'prepayment_units',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  prepaymentUnits?: number;

  @Column({ field: 'parent_link', allowNull: true, type: DataType.INTEGER })
  parentLink?: number;

  @Column({
    field: 'applied_tiers',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  appliedTiers?: object;

  @Column({
    field: 'prepaid_units_expiry',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('1'),
  })
  prepaidUnitsExpiry?: number;

  @Column({ field: 'list_price', allowNull: true, type: DataType.DOUBLE })
  listPrice?: number;

  @Column({ field: 'list_price_base', allowNull: true, type: DataType.STRING })
  listPriceBase?: string;

  @Column({
    field: 'fmv_allocation_enabled',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  fmvAllocationEnabled?: boolean;

  @Column({
    field: 'fmv_effective_price',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  fmvEffectivePrice?: number;

  @Column({
    field: 'fmv_allocation',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  fmvAllocation?: string;

  @Column({
    field: 'expired_units',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  expiredUnits?: string;

  @Column({
    field: 'subscription_charge_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  subscriptionChargeId?: number;

  @Column({
    field: 'regular_line_link',
    allowNull: true,
    type: DataType.INTEGER,
  })
  regularLineLink?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  uid?: string;

  @Column({ field: 'parent_uid', allowNull: true, type: DataType.STRING })
  parentUid?: string;

  @Column({
    field: 'tier_offset',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  tierOffset?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  seq?: number;

  @Column({ field: 'usage_data', allowNull: true, type: DataType.JSONB })
  usageData?: object;
}
