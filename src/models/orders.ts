import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface ordersAttributes {
  id?: number;
  orderId?: string;
  orderDate?: string;
  customerId?: number;
  status?: string;
  notes?: string;
  orderAmount?: string;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  separateInvoice?: boolean;
  customFields?: object;
  couponCode?: string;
  closedFpContract?: number;
  openFpDate?: Date;
  conversionRate?: number;
  currencyId?: number;
  priceBooksId?: number;
  billContactId?: number;
  shippingContactId?: number;
  paymentTermId?: number;
}

@Table({ tableName: 'orders', timestamps: false })
export class orders
  extends Model<ordersAttributes, ordersAttributes>
  implements ordersAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('orders_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'order_id', allowNull: true, type: DataType.STRING })
  orderId?: string;

  @Column({ field: 'order_date', allowNull: true, type: DataType.STRING })
  orderDate?: string;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'fulfilled'::character varying"),
  })
  status?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  notes?: string;

  @Column({
    field: 'order_amount',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  orderAmount?: string;

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

  @Column({
    field: 'separate_invoice',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  separateInvoice?: boolean;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({ field: 'coupon_code', allowNull: true, type: DataType.STRING })
  couponCode?: string;

  @Column({
    field: 'closed_fp_contract',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  closedFpContract?: number;

  @Column({ field: 'open_fp_date', allowNull: true, type: DataType.DATE(6) })
  openFpDate?: Date;

  @Column({
    field: 'conversion_rate',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('1.0'),
  })
  conversionRate?: number;

  @Column({ field: 'currency_id', allowNull: true, type: DataType.INTEGER })
  currencyId?: number;

  @Column({ field: 'price_books_id', allowNull: true, type: DataType.INTEGER })
  priceBooksId?: number;

  @Column({ field: 'bill_contact_id', allowNull: true, type: DataType.INTEGER })
  billContactId?: number;

  @Column({
    field: 'shipping_contact_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  shippingContactId?: number;

  @Column({ field: 'payment_term_id', allowNull: true, type: DataType.INTEGER })
  paymentTermId?: number;
}
