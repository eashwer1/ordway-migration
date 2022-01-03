import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface invoicesAttributes {
  id?: number;
  subscriptionId?: number;
  startDate?: string;
  endDate?: string;
  dueDate?: string;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
  date?: string;
  status?: number;
  billingRunId?: number;
  pdfFileName?: string;
  pdfContentType?: string;
  pdfFileSize?: number;
  pdfUpdatedAt?: Date;
  invoiceId?: string;
  createdById?: number;
  updatedById?: number;
  balance?: string;
  total?: string;
  paidAmount?: string;
  companyId?: number;
  lines?: object;
  customerId?: number;
  subtotal?: string;
  emailed?: boolean;
  customFields?: object;
  conversionRate?: number;
  invoiceTax?: string;
  billContactId?: number;
  shippingContactId?: number;
  currencyId?: number;
  reversedOn?: string;
  contactsInfo?: object;
  paymentTermName?: string;
}

@Table({ tableName: 'invoices', timestamps: false })
export class invoices
  extends Model<invoicesAttributes, invoicesAttributes>
  implements invoicesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('invoices_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'subscription_id', allowNull: true, type: DataType.INTEGER })
  subscriptionId?: number;

  @Column({ field: 'start_date', allowNull: true, type: DataType.STRING })
  startDate?: string;

  @Column({ field: 'end_date', allowNull: true, type: DataType.STRING })
  endDate?: string;

  @Column({ field: 'due_date', allowNull: true, type: DataType.STRING })
  dueDate?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  notes?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ allowNull: true, type: DataType.STRING })
  date?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  status?: number;

  @Column({ field: 'billing_run_id', allowNull: true, type: DataType.INTEGER })
  billingRunId?: number;

  @Column({ field: 'pdf_file_name', allowNull: true, type: DataType.STRING })
  pdfFileName?: string;

  @Column({ field: 'pdf_content_type', allowNull: true, type: DataType.STRING })
  pdfContentType?: string;

  @Column({ field: 'pdf_file_size', allowNull: true, type: DataType.INTEGER })
  pdfFileSize?: number;

  @Column({ field: 'pdf_updated_at', allowNull: true, type: DataType.DATE(6) })
  pdfUpdatedAt?: Date;

  @Column({ field: 'invoice_id', allowNull: true, type: DataType.STRING })
  invoiceId?: string;

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

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  total?: string;

  @Column({
    field: 'paid_amount',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  paidAmount?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ allowNull: true, type: DataType.JSONB })
  lines?: object;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  subtotal?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  emailed?: boolean;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({ field: 'conversion_rate', allowNull: true, type: DataType.DOUBLE })
  conversionRate?: number;

  @Column({
    field: 'invoice_tax',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  invoiceTax?: string;

  @Column({ field: 'bill_contact_id', allowNull: true, type: DataType.INTEGER })
  billContactId?: number;

  @Column({
    field: 'shipping_contact_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  shippingContactId?: number;

  @Column({ field: 'currency_id', allowNull: true, type: DataType.INTEGER })
  currencyId?: number;

  @Column({ field: 'reversed_on', allowNull: true, type: DataType.STRING })
  reversedOn?: string;

  @Column({ field: 'contacts_info', allowNull: true, type: DataType.JSONB })
  contactsInfo?: object;

  @Column({
    field: 'payment_term_name',
    allowNull: true,
    type: DataType.STRING,
  })
  paymentTermName?: string;
}
