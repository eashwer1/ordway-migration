import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface orderLinesAttributes {
  id?: number;
  price?: number;
  quantity?: number;
  discount?: number;
  effectivePrice?: string;
  description?: string;
  companyId?: number;
  orderId?: number;
  productId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  revenueScheduleId?: number;
  revenueScheduleExternalId?: string;
  lineNo?: number;
  couponLine?: boolean;
  customFields?: object;
  priceBookEntriesId?: number;
}

@Table({ tableName: 'order_lines', timestamps: false })
export class orderLines
  extends Model<orderLinesAttributes, orderLinesAttributes>
  implements orderLinesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('order_lines_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  price?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  quantity?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  discount?: number;

  @Column({ field: 'effective_price', allowNull: true, type: DataType.BIGINT })
  effectivePrice?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'order_id', allowNull: true, type: DataType.INTEGER })
  orderId?: number;

  @Column({ field: 'product_id', allowNull: true, type: DataType.INTEGER })
  productId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

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

  @Column({ field: 'line_no', allowNull: true, type: DataType.INTEGER })
  lineNo?: number;

  @Column({
    field: 'coupon_line',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  couponLine?: boolean;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({
    field: 'price_book_entries_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  priceBookEntriesId?: number;
}
