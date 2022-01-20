import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface customersAttributes {
  id?: number;
  customerId?: string;
  name?: string;
  description?: string;
  customerType?: string;
  website?: string;
  currencyId?: number;
  billingTags?: string;
  createdAt?: Date;
  updatedAt?: Date;
  billingCycleDay?: number;
  status?: string;
  createdById?: number;
  updatedById?: number;
  balance?: string;
  companyId?: number;
  customFields?: object;
  stripeTestCustomerId?: string;
  stripeLiveCustomerId?: string;
  lastInvoicedAt?: Date;
  invoiceTotal?: string;
  autoPay?: boolean;
  billContactId?: number;
  printPreference?: boolean;
  emailPreference?: boolean;
  ancestry?: string;
  taxExempt?: boolean;
  shippingContactId?: number;
  billingBatchId?: number;
  parentCustomerId?: number;
  mrr?: string;
  lastInvoiceAmount?: string;
  lifetimeInvoiced?: string;
  nextInvoiceAmount?: string;
  paymentTermId?: number;
  fromOrdway?: boolean;
  billToParent?: boolean;
  priceBookId?: number;
  cmrr?: string;
  discountedCmrr?: string;
  paymentOptions?: object;
  editAutoPay?: boolean;
  portalStatus?: string;
}

@Table({ tableName: 'customers', timestamps: false })
export class customers
  extends Model<customersAttributes, customersAttributes>
  implements customersAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('customers_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.STRING })
  customerId?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({
    field: 'customer_type',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'business'::character varying"),
  })
  customerType?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  website?: string;

  @Column({ field: 'currency_id', allowNull: true, type: DataType.INTEGER })
  currencyId?: number;

  @Column({ field: 'billing_tags', allowNull: true, type: DataType.STRING })
  billingTags?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'billing_cycle_day',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  billingCycleDay?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'active'::character varying"),
  })
  status?: string;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  balance?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({
    field: 'stripe_test_customer_id',
    allowNull: true,
    type: DataType.STRING,
  })
  stripeTestCustomerId?: string;

  @Column({
    field: 'stripe_live_customer_id',
    allowNull: true,
    type: DataType.STRING,
  })
  stripeLiveCustomerId?: string;

  @Column({
    field: 'last_invoiced_at',
    allowNull: true,
    type: DataType.DATE(6),
  })
  lastInvoicedAt?: Date;

  @Column({
    field: 'invoice_total',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  invoiceTotal?: string;

  @Column({
    field: 'auto_pay',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  autoPay?: boolean;

  @Column({ field: 'bill_contact_id', allowNull: true, type: DataType.INTEGER })
  billContactId?: number;

  @Column({
    field: 'print_preference',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  printPreference?: boolean;

  @Column({
    field: 'email_preference',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  emailPreference?: boolean;

  @Column({ allowNull: true, type: DataType.STRING })
  ancestry?: string;

  @Column({
    field: 'tax_exempt',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  taxExempt?: boolean;

  @Column({
    field: 'shipping_contact_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  shippingContactId?: number;

  @Column({
    field: 'billing_batch_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  billingBatchId?: number;

  @Column({
    field: 'parent_customer_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  parentCustomerId?: number;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  mrr?: string;

  @Column({
    field: 'last_invoice_amount',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  lastInvoiceAmount?: string;

  @Column({
    field: 'lifetime_invoiced',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  lifetimeInvoiced?: string;

  @Column({
    field: 'next_invoice_amount',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  nextInvoiceAmount?: string;

  @Column({ field: 'payment_term_id', allowNull: true, type: DataType.INTEGER })
  paymentTermId?: number;

  @Column({
    field: 'from_ordway',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  fromOrdway?: boolean;

  @Column({
    field: 'bill_to_parent',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  billToParent?: boolean;

  @Column({ field: 'price_book_id', allowNull: true, type: DataType.INTEGER })
  priceBookId?: number;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  cmrr?: string;

  @Column({
    field: 'discounted_cmrr',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  discountedCmrr?: string;

  @Column({
    field: 'payment_options',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  paymentOptions?: object;

  @Column({
    field: 'edit_auto_pay',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  editAutoPay?: boolean;

  @Column({ field: 'portal_status', allowNull: true, type: DataType.STRING })
  portalStatus?: string;
}
