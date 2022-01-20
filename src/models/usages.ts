import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface usagesAttributes {
  id?: number;
  quantity?: number;
  date?: string;
  subscriptionId?: number;
  customerId?: number;
  chargeId?: string;
  unitOfMeasure?: string;
  usageId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  description?: string;
  createdById?: number;
  updatedById?: number;
  customFields?: object;
  companyId?: number;
  status?: string;
  errorMessage?: string;
  subscriptionLineId?: string;
  state?: number;
  uid?: string;
  amount?: number;
  bslId?: string;
  seq?: number;
  totalPeriodQty?: number;
  tierOffset?: number;
}

@Table({ tableName: 'usages', timestamps: false })
export class usages
  extends Model<usagesAttributes, usagesAttributes>
  implements usagesAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('usages_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  quantity?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  date?: string;

  @Column({ field: 'subscription_id', allowNull: true, type: DataType.INTEGER })
  subscriptionId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'charge_id', allowNull: true, type: DataType.STRING })
  chargeId?: string;

  @Column({ field: 'unit_of_measure', allowNull: true, type: DataType.STRING })
  unitOfMeasure?: string;

  @Column({ field: 'usage_id', allowNull: true, type: DataType.STRING })
  usageId?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  status?: string;

  @Column({ field: 'error_message', allowNull: true, type: DataType.STRING })
  errorMessage?: string;

  @Column({
    field: 'subscription_line_id',
    allowNull: true,
    type: DataType.STRING,
  })
  subscriptionLineId?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  state?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  uid?: string;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  amount?: number;

  @Column({ field: 'bsl_id', allowNull: true, type: DataType.STRING })
  bslId?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  seq?: number;

  @Column({
    field: 'total_period_qty',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  totalPeriodQty?: number;

  @Column({ field: 'tier_offset', allowNull: true, type: DataType.INTEGER })
  tierOffset?: number;
}
