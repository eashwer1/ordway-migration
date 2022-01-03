import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface creditsAttributes {
  id?: number;
  creditId?: string;
  customerId?: number;
  createdById?: number;
  updatedById?: number;
  status?: string;
  creditDate?: string;
  creditAmount?: string;
  referenceNumber?: string;
  appliedAmount?: string;
  unappliedAmount?: string;
  autoApply?: boolean;
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
  companyId?: number;
  chartOfAccountId?: number;
  refundedAmount?: string;
  customFields?: object;
  conversionRate?: number;
  reversedOn?: string;
  currencyId?: number;
  billContactId?: number;
  shippingContactId?: number;
  creditTax?: string;
  subtotal?: string;
  contactsInfo?: object;
  pdfFileName?: string;
  pdfContentType?: string;
  pdfFileSize?: number;
  pdfUpdatedAt?: Date;
}

@Table({ tableName: 'credits', timestamps: false })
export class credits
  extends Model<creditsAttributes, creditsAttributes>
  implements creditsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('credits_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'credit_id', allowNull: true, type: DataType.STRING })
  creditId?: string;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  status?: string;

  @Column({ field: 'credit_date', allowNull: true, type: DataType.STRING })
  creditDate?: string;

  @Column({
    field: 'credit_amount',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  creditAmount?: string;

  @Column({ field: 'reference_number', allowNull: true, type: DataType.STRING })
  referenceNumber?: string;

  @Column({
    field: 'applied_amount',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  appliedAmount?: string;

  @Column({
    field: 'unapplied_amount',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  unappliedAmount?: string;

  @Column({
    field: 'auto_apply',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  autoApply?: boolean;

  @Column({ allowNull: true, type: DataType.STRING })
  notes?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'chart_of_account_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  chartOfAccountId?: number;

  @Column({
    field: 'refunded_amount',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  refundedAmount?: string;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({
    field: 'conversion_rate',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('1.0'),
  })
  conversionRate?: number;

  @Column({ field: 'reversed_on', allowNull: true, type: DataType.STRING })
  reversedOn?: string;

  @Column({ field: 'currency_id', allowNull: true, type: DataType.INTEGER })
  currencyId?: number;

  @Column({ field: 'bill_contact_id', allowNull: true, type: DataType.INTEGER })
  billContactId?: number;

  @Column({
    field: 'shipping_contact_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  shippingContactId?: number;

  @Column({
    field: 'credit_tax',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  creditTax?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  subtotal?: string;

  @Column({ field: 'contacts_info', allowNull: true, type: DataType.JSONB })
  contactsInfo?: object;

  @Column({ field: 'pdf_file_name', allowNull: true, type: DataType.STRING })
  pdfFileName?: string;

  @Column({ field: 'pdf_content_type', allowNull: true, type: DataType.STRING })
  pdfContentType?: string;

  @Column({ field: 'pdf_file_size', allowNull: true, type: DataType.INTEGER })
  pdfFileSize?: number;

  @Column({ field: 'pdf_updated_at', allowNull: true, type: DataType.DATE(6) })
  pdfUpdatedAt?: Date;
}
