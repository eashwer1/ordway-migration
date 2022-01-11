import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface revenueScheduleLinesAttributes {
  id?: number;
  revenueScheduleId?: number;
  financialPeriodId?: number;
  postingDate?: Date;
  posted?: boolean;
  amount?: string;
  companyId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  customFields?: object;
  closedFpContract?: number;
  closedFpPostingDate?: Date;
  fmvAllocationEnabled?: boolean;
  fmvAllocation?: string;
  notes?: string;
  lineType?: number;
  currencyId?: number;
  conversionRate?: number;
  revenueScheduleUid?: string;
  subscriptionChargeUid?: string;
}

@Table({ tableName: 'revenue_schedule_lines', timestamps: false })
export class revenueScheduleLines
  extends Model<revenueScheduleLinesAttributes, revenueScheduleLinesAttributes>
  implements revenueScheduleLinesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('revenue_schedule_lines_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'revenue_schedule_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  revenueScheduleId?: number;

  @Column({
    field: 'financial_period_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  financialPeriodId?: number;

  @Column({ field: 'posting_date', allowNull: true, type: DataType.DATE(6) })
  postingDate?: Date;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  posted?: boolean;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  amount?: string;

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
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({
    field: 'closed_fp_contract',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  closedFpContract?: number;

  @Column({
    field: 'closed_fp_posting_date',
    allowNull: true,
    type: DataType.DATE(6),
  })
  closedFpPostingDate?: Date;

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

  @Column({ allowNull: true, type: DataType.STRING })
  notes?: string;

  @Column({
    field: 'line_type',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  lineType?: number;

  @Column({ field: 'currency_id', allowNull: true, type: DataType.INTEGER })
  currencyId?: number;

  @Column({ field: 'conversion_rate', allowNull: true, type: DataType.DOUBLE })
  conversionRate?: number;

  @Column({
    field: 'revenue_schedule_uid',
    allowNull: true,
    type: DataType.STRING,
  })
  revenueScheduleUid?: string;

  @Column({
    field: 'subscription_charge_uid',
    allowNull: true,
    type: DataType.STRING,
  })
  subscriptionChargeUid?: string;
}
