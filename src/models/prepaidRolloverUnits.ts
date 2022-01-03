import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface prepaidRolloverUnitsAttributes {
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
  quantity?: number;
  price?: number;
  discount?: number;
  effectivePrice?: number;
  invoiced?: boolean;
  productId?: string;
  prevBillingScheduleId?: string;
  billingScheduleId?: number;
  customerId?: number;
  invoiceId?: number;
  companyId?: number;
  subscriptionId?: number;
  createdById?: number;
  updatedById?: number;
  unusedPrepaymentUnits?: number;
  prepaymentUnits?: number;
  prepaidUnitsExpiry?: number;
  lineType?: number;
  priceBase?: string;
  pricingMethod?: string;
  couponLine?: boolean;
  conversionRate?: number;
  customFields?: object;
  createdAt?: Date;
  updatedAt?: Date;
  bonus?: boolean;
  expiredUnits?: string;
  uid?: string;
  parentUid?: string;
  subscriptionChargeId?: number;
}

@Table({ tableName: 'prepaid_rollover_units', timestamps: false })
export class prepaidRolloverUnits
  extends Model<prepaidRolloverUnitsAttributes, prepaidRolloverUnitsAttributes>
  implements prepaidRolloverUnitsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('prepaid_rollover_units_id_seq'::regclass)",
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

  @Column({ allowNull: true, type: DataType.DOUBLE })
  quantity?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  price?: number;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  discount?: number;

  @Column({ field: 'effective_price', allowNull: true, type: DataType.DOUBLE })
  effectivePrice?: number;

  @Column({ allowNull: true, type: DataType.BOOLEAN })
  invoiced?: boolean;

  @Column({ field: 'product_id', allowNull: true, type: DataType.STRING })
  productId?: string;

  @Column({
    field: 'prev_billing_schedule_id',
    allowNull: true,
    type: DataType.STRING,
  })
  prevBillingScheduleId?: string;

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

  @Column({ field: 'subscription_id', allowNull: true, type: DataType.INTEGER })
  subscriptionId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({
    field: 'unused_prepayment_units',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  unusedPrepaymentUnits?: number;

  @Column({
    field: 'prepayment_units',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  prepaymentUnits?: number;

  @Column({
    field: 'prepaid_units_expiry',
    allowNull: true,
    type: DataType.INTEGER,
  })
  prepaidUnitsExpiry?: number;

  @Column({
    field: 'line_type',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('1'),
  })
  lineType?: number;

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

  @Column({ field: 'conversion_rate', allowNull: true, type: DataType.DOUBLE })
  conversionRate?: number;

  @Column({ field: 'custom_fields', allowNull: true, type: DataType.JSONB })
  customFields?: object;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  bonus?: boolean;

  @Column({
    field: 'expired_units',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  expiredUnits?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  uid?: string;

  @Column({ field: 'parent_uid', allowNull: true, type: DataType.STRING })
  parentUid?: string;

  @Column({
    field: 'subscription_charge_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  subscriptionChargeId?: number;
}
