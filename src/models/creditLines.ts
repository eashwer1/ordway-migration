import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface creditLinesAttributes {
  id?: number;
  creditId?: number;
  chartOfAccountId?: number;
  lineNo?: number;
  productId?: number;
  description?: string;
  qty?: number;
  price?: number;
  effectivePrice?: string;
  taxable?: boolean;
  lineTax?: string;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  createdById?: number;
  updatedById?: number;
  customFields?: object;
  taxOverride?: boolean;
}

@Table({ tableName: 'credit_lines', timestamps: false })
export class creditLines
  extends Model<creditLinesAttributes, creditLinesAttributes>
  implements creditLinesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('credit_lines_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'credit_id', allowNull: true, type: DataType.INTEGER })
  creditId?: number;

  @Column({
    field: 'chart_of_account_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  chartOfAccountId?: number;

  @Column({ field: 'line_no', allowNull: true, type: DataType.INTEGER })
  lineNo?: number;

  @Column({ field: 'product_id', allowNull: true, type: DataType.INTEGER })
  productId?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  qty?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  price?: number;

  @Column({ field: 'effective_price', allowNull: true, type: DataType.BIGINT })
  effectivePrice?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  taxable?: boolean;

  @Column({
    field: 'line_tax',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  lineTax?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

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

  @Column({
    field: 'tax_override',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  taxOverride?: boolean;
}
