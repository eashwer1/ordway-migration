import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface quoteChargesAttributes {
  id?: number;
  chargeExternalId?: string;
  chargeName?: string;
  planId?: string;
  planName?: string;
  productExternalId?: string;
  productName?: string;
  discount?: number;
  quantity?: number;
  effectivePrice?: number;
  includedUnits?: number;
  billingScheduleId?: number;
  chargeTiming?: string;
  chargeType?: string;
  price?: number;
  billingScheduleExternalId?: string;
  unitOfMeasure?: string;
  revenueScheduleId?: number;
  revenueScheduleExternalId?: string;
  priceBase?: string;
  tiers?: object;
  pricingModel?: string;
  proration?: boolean;
  billingDayType?: number;
  billingDay?: number;
  startAlignmentType?: number;
  startAlignment?: number;
  effectiveDate?: string;
  chargeId?: number;
  billingPeriodId?: number;
  quoteVersionId?: number;
  companyId?: number;
  productId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  customFields?: object;
  prepaymentPeriods?: number;
  prepaymentAmount?: number;
  completionDate?: string;
  startDate?: string;
  endDate?: string;
  backcharge?: boolean;
  renewalIncrementPercent?: number;
  overrideRenewalIncrementPercent?: boolean;
  prepaidUnitsEnable?: boolean;
  autoRefillPrepaymentUnits?: boolean;
  refillQty?: number;
  refillPrepaidUnitsFor?: number;
  prepaidUnitsExpiry?: number;
  refundUnitsOnCancel?: boolean;
  rolloverPercentage?: string;
  bonusUnitRolloverPercentage?: string;
  bonusExpiryDate?: Date;
  appliedTiers?: object;
  priceBookEntriesId?: number;
  perUsageRating?: boolean;
  removeUnitsOnCancel?: boolean;
}

@Table({ tableName: 'quote_charges', timestamps: false })
export class quoteCharges
  extends Model<quoteChargesAttributes, quoteChargesAttributes>
  implements quoteChargesAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('quote_charges_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'charge_external_id',
    allowNull: true,
    type: DataType.STRING,
  })
  chargeExternalId?: string;

  @Column({ field: 'charge_name', allowNull: true, type: DataType.STRING })
  chargeName?: string;

  @Column({ field: 'plan_id', allowNull: true, type: DataType.STRING })
  planId?: string;

  @Column({ field: 'plan_name', allowNull: true, type: DataType.STRING })
  planName?: string;

  @Column({
    field: 'product_external_id',
    allowNull: true,
    type: DataType.STRING,
  })
  productExternalId?: string;

  @Column({ field: 'product_name', allowNull: true, type: DataType.STRING })
  productName?: string;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0'),
  })
  discount?: number;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('1.0'),
  })
  quantity?: number;

  @Column({
    field: 'effective_price',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  effectivePrice?: number;

  @Column({
    field: 'included_units',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  includedUnits?: number;

  @Column({
    field: 'billing_schedule_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  billingScheduleId?: number;

  @Column({ field: 'charge_timing', allowNull: true, type: DataType.STRING })
  chargeTiming?: string;

  @Column({ field: 'charge_type', allowNull: true, type: DataType.STRING })
  chargeType?: string;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  price?: number;

  @Column({
    field: 'billing_schedule_external_id',
    allowNull: true,
    type: DataType.STRING,
  })
  billingScheduleExternalId?: string;

  @Column({ field: 'unit_of_measure', allowNull: true, type: DataType.STRING })
  unitOfMeasure?: string;

  @Column({
    field: 'revenue_schedule_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  revenueScheduleId?: number;

  @Column({
    field: 'revenue_schedule_external_id',
    allowNull: true,
    type: DataType.STRING,
  })
  revenueScheduleExternalId?: string;

  @Column({ field: 'price_base', allowNull: true, type: DataType.STRING })
  priceBase?: string;

  @Column({ allowNull: true, type: DataType.JSONB })
  tiers?: object;

  @Column({
    field: 'pricing_model',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'per_unit'::character varying"),
  })
  pricingModel?: string;

  @Column({ allowNull: true, type: DataType.BOOLEAN })
  proration?: boolean;

  @Column({
    field: 'billing_day_type',
    allowNull: true,
    type: DataType.INTEGER,
  })
  billingDayType?: number;

  @Column({ field: 'billing_day', allowNull: true, type: DataType.INTEGER })
  billingDay?: number;

  @Column({
    field: 'start_alignment_type',
    allowNull: true,
    type: DataType.INTEGER,
  })
  startAlignmentType?: number;

  @Column({ field: 'start_alignment', allowNull: true, type: DataType.INTEGER })
  startAlignment?: number;

  @Column({ field: 'effective_date', allowNull: true, type: DataType.STRING })
  effectiveDate?: string;

  @Column({ field: 'charge_id', allowNull: true, type: DataType.INTEGER })
  chargeId?: number;

  @Column({
    field: 'billing_period_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  billingPeriodId?: number;

  @Column({
    field: 'quote_version_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  quoteVersionId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'product_id', allowNull: true, type: DataType.INTEGER })
  productId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

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

  @Column({ field: 'completion_date', allowNull: true, type: DataType.STRING })
  completionDate?: string;

  @Column({ field: 'start_date', allowNull: true, type: DataType.STRING })
  startDate?: string;

  @Column({ field: 'end_date', allowNull: true, type: DataType.STRING })
  endDate?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  backcharge?: boolean;

  @Column({
    field: 'renewal_increment_percent',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  renewalIncrementPercent?: number;

  @Column({
    field: 'override_renewal_increment_percent',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  overrideRenewalIncrementPercent?: boolean;

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

  @Column({ field: 'applied_tiers', allowNull: true, type: DataType.JSONB })
  appliedTiers?: object;

  @Column({
    field: 'price_book_entries_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  priceBookEntriesId?: number;

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
}
