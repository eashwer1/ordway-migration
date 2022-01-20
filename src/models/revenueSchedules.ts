import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface revenueSchedulesAttributes {
  id?: number;
  revenueScheduleId?: string;
  customerId?: number;
  customerExternalId?: string;
  sourceTransaction?: string;
  productId?: string;
  productName?: string;
  planId?: string;
  planName?: string;
  chargeExternalId?: string;
  chargeId?: number;
  chargeName?: string;
  chargeType?: string;
  chargeTiming?: string;
  totalRevenue?: string;
  recognizedRevenue?: string;
  unrecognizedRevenue?: string;
  orderId?: number;
  subscriptionId?: number;
  startDate?: Date;
  endDate?: Date;
  nextPostingDate?: Date;
  revenueRuleId?: number;
  companyId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  sourceTransactionId?: string;
  sourceTargetId?: string;
  unrecognizedUnitsLeft?: number;
  perPeriodPrice?: string;
  perPeriodFmv?: string;
  uid?: string;
}

@Table({ tableName: 'revenue_schedules', timestamps: false })
export class revenueSchedules
  extends Model<revenueSchedulesAttributes, revenueSchedulesAttributes>
  implements revenueSchedulesAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('revenue_schedules_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'revenue_schedule_id',
    allowNull: true,
    type: DataType.STRING,
  })
  revenueScheduleId?: string;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({
    field: 'customer_external_id',
    allowNull: true,
    type: DataType.STRING,
  })
  customerExternalId?: string;

  @Column({
    field: 'source_transaction',
    allowNull: true,
    type: DataType.STRING,
  })
  sourceTransaction?: string;

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

  @Column({ field: 'charge_id', allowNull: true, type: DataType.INTEGER })
  chargeId?: number;

  @Column({ field: 'charge_name', allowNull: true, type: DataType.STRING })
  chargeName?: string;

  @Column({ field: 'charge_type', allowNull: true, type: DataType.STRING })
  chargeType?: string;

  @Column({ field: 'charge_timing', allowNull: true, type: DataType.STRING })
  chargeTiming?: string;

  @Column({
    field: 'total_revenue',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  totalRevenue?: string;

  @Column({
    field: 'recognized_revenue',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  recognizedRevenue?: string;

  @Column({
    field: 'unrecognized_revenue',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  unrecognizedRevenue?: string;

  @Column({ field: 'order_id', allowNull: true, type: DataType.INTEGER })
  orderId?: number;

  @Column({ field: 'subscription_id', allowNull: true, type: DataType.INTEGER })
  subscriptionId?: number;

  @Column({ field: 'start_date', allowNull: true, type: DataType.DATE(6) })
  startDate?: Date;

  @Column({ field: 'end_date', allowNull: true, type: DataType.DATE(6) })
  endDate?: Date;

  @Column({
    field: 'next_posting_date',
    allowNull: true,
    type: DataType.DATE(6),
  })
  nextPostingDate?: Date;

  @Column({ field: 'revenue_rule_id', allowNull: true, type: DataType.INTEGER })
  revenueRuleId?: number;

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
    field: 'source_transaction_id',
    allowNull: true,
    type: DataType.STRING,
  })
  sourceTransactionId?: string;

  @Column({ field: 'source_target_id', allowNull: true, type: DataType.STRING })
  sourceTargetId?: string;

  @Column({
    field: 'unrecognized_units_left',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  unrecognizedUnitsLeft?: number;

  @Column({
    field: 'per_period_price',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  perPeriodPrice?: string;

  @Column({
    field: 'per_period_fmv',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  perPeriodFmv?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  uid?: string;
}
