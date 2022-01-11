import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface chargesAttributes {
  id?: number;
  chargeId?: string;
  chargeName?: string;
  description?: string;
  chargeType?: string;
  price?: number;
  chargeTiming?: string;
  unitOfMeasure?: string;
  includedUnits?: number;
  effectiveDate?: string;
  planId?: number;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  revenueRuleId?: number;
  priceBase?: string;
  billingDayType?: number;
  billingDay?: number;
  proration?: boolean;
  startAlignmentType?: number;
  startAlignment?: number;
  productId?: number;
  customFields?: object;
  pricingModel?: string;
  tiers?: object;
  billingPeriodId?: number;
  prepaymentPeriods?: number;
  prepaymentAmount?: number;
  backcharge?: boolean;
  prepaidUnitsEnable?: boolean;
  autoRefillPrepaymentUnits?: boolean;
  refillQty?: number;
  refillPrepaidUnitsFor?: number;
  prepaidUnitsExpiry?: number;
  refundUnitsOnCancel?: boolean;
  rolloverPercentage?: string;
  bonusUnitRolloverPercentage?: string;
  bonusExpiryDate?: Date;
  fmvAllocationEnabled?: boolean;
  fmv?: string;
  accountingInfo?: object;
  perUsageRating?: boolean;
  removeUnitsOnCancel?: boolean;
  usagePeriod?: number;
}

@Table({ tableName: 'charges', timestamps: false })
export class charges
  extends Model<chargesAttributes, chargesAttributes>
  implements chargesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('charges_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'charge_id', allowNull: true, type: DataType.STRING })
  chargeId?: string;

  @Column({ field: 'charge_name', allowNull: true, type: DataType.STRING })
  chargeName?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({
    field: 'charge_type',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'one_time'::character varying"),
  })
  chargeType?: string;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0'),
  })
  price?: number;

  @Column({ field: 'charge_timing', allowNull: true, type: DataType.STRING })
  chargeTiming?: string;

  @Column({ field: 'unit_of_measure', allowNull: true, type: DataType.STRING })
  unitOfMeasure?: string;

  @Column({
    field: 'included_units',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  includedUnits?: number;

  @Column({ field: 'effective_date', allowNull: true, type: DataType.STRING })
  effectiveDate?: string;

  @Column({ field: 'plan_id', allowNull: true, type: DataType.INTEGER })
  planId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'revenue_rule_id', allowNull: true, type: DataType.INTEGER })
  revenueRuleId?: number;

  @Column({ field: 'price_base', allowNull: true, type: DataType.STRING })
  priceBase?: string;

  @Column({
    field: 'billing_day_type',
    allowNull: true,
    type: DataType.INTEGER,
  })
  billingDayType?: number;

  @Column({ field: 'billing_day', allowNull: true, type: DataType.INTEGER })
  billingDay?: number;

  @Column({ allowNull: true, type: DataType.BOOLEAN })
  proration?: boolean;

  @Column({
    field: 'start_alignment_type',
    allowNull: true,
    type: DataType.INTEGER,
  })
  startAlignmentType?: number;

  @Column({ field: 'start_alignment', allowNull: true, type: DataType.INTEGER })
  startAlignment?: number;

  @Column({ field: 'product_id', allowNull: true, type: DataType.INTEGER })
  productId?: number;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({
    field: 'pricing_model',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'per_unit'::character varying"),
  })
  pricingModel?: string;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  tiers?: object;

  @Column({
    field: 'billing_period_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  billingPeriodId?: number;

  @Column({
    field: 'prepayment_periods',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  prepaymentPeriods?: number;

  @Column({
    field: 'prepayment_amount',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  prepaymentAmount?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  backcharge?: boolean;

  @Column({
    field: 'prepaid_units_enable',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  prepaidUnitsEnable?: boolean;

  @Column({
    field: 'auto_refill_prepayment_units',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  autoRefillPrepaymentUnits?: boolean;

  @Column({
    field: 'refill_qty',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  refillQty?: number;

  @Column({
    field: 'refill_prepaid_units_for',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  refillPrepaidUnitsFor?: number;

  @Column({
    field: 'prepaid_units_expiry',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('1'),
  })
  prepaidUnitsExpiry?: number;

  @Column({
    field: 'refund_units_on_cancel',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  refundUnitsOnCancel?: boolean;

  @Column({
    field: 'rollover_percentage',
    allowNull: true,
    type: DataType.DECIMAL(5, 2),
    defaultValue: Sequelize.literal('100.0'),
  })
  rolloverPercentage?: string;

  @Column({
    field: 'bonus_unit_rollover_percentage',
    allowNull: true,
    type: DataType.DECIMAL(5, 2),
    defaultValue: Sequelize.literal('100.0'),
  })
  bonusUnitRolloverPercentage?: string;

  @Column({
    field: 'bonus_expiry_date',
    allowNull: true,
    type: DataType.DATE(6),
  })
  bonusExpiryDate?: Date;

  @Column({
    field: 'fmv_allocation_enabled',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  fmvAllocationEnabled?: boolean;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  fmv?: string;

  @Column({
    field: 'accounting_info',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  accountingInfo?: object;

  @Column({
    field: 'per_usage_rating',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  perUsageRating?: boolean;

  @Column({
    field: 'remove_units_on_cancel',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  removeUnitsOnCancel?: boolean;

  @Column({
    field: 'usage_period',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  usagePeriod?: number;
}
