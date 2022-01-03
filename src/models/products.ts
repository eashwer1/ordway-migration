import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface productsAttributes {
  id?: number;
  name?: string;
  sku?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status?: string;
  productId?: string;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  price?: number;
  revenueRuleId?: number;
  recognitionStartDate?: string;
  taxable?: boolean;
  customFields?: object;
  deferredRevenueManagement?: boolean;
  chartOfAccountId?: number;
  fromOrdway?: boolean;
  showRevenueSchedules?: boolean;
}

@Table({ tableName: 'products', timestamps: false })
export class products
  extends Model<productsAttributes, productsAttributes>
  implements productsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('products_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  sku?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'active'::character varying"),
  })
  status?: string;

  @Column({ field: 'product_id', allowNull: true, type: DataType.STRING })
  productId?: string;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0'),
  })
  price?: number;

  @Column({ field: 'revenue_rule_id', allowNull: true, type: DataType.INTEGER })
  revenueRuleId?: number;

  @Column({
    field: 'recognition_start_date',
    allowNull: true,
    type: DataType.STRING,
  })
  recognitionStartDate?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  taxable?: boolean;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({
    field: 'deferred_revenue_management',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  deferredRevenueManagement?: boolean;

  @Column({
    field: 'chart_of_account_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  chartOfAccountId?: number;

  @Column({
    field: 'from_ordway',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  fromOrdway?: boolean;

  @Column({
    field: 'show_revenue_schedules',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  showRevenueSchedules?: boolean;
}
