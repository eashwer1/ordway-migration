import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface quotesAttributes {
  id?: number;
  number?: string;
  customerId?: number;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  status?: string;
  separateInvoice?: boolean;
  currentVersionId?: number;
  pdfFileName?: string;
  pdfContentType?: string;
  pdfFileSize?: number;
  pdfUpdatedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  signToken?: string;
  acceptedAt?: Date;
  companySignAt?: Date;
  companyTextSignature?: string;
  customerTextSignature?: string;
  subscriptionNumber?: string;
  cancelledAt?: Date;
  templateId?: number;
  quoteType?: string;
  senderName?: string;
  senderEmail?: string;
  recipientName?: string;
  recipientEmail?: string;
  recipientIpAddress?: string;
  senderIpAddress?: string;
  customFields?: object;
  customFileAttached?: boolean;
  pdfMaskedUrl?: string;
  htmlTemplateId?: number;
  customerSignatureFont?: string;
  companySignatureFont?: string;
  priceBooksId?: number;
}

@Table({ tableName: 'quotes', timestamps: false })
export class quotes
  extends Model<quotesAttributes, quotesAttributes>
  implements quotesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('quotes_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  number?: string;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'draft'::character varying"),
  })
  status?: string;

  @Column({
    field: 'separate_invoice',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  separateInvoice?: boolean;

  @Column({
    field: 'current_version_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  currentVersionId?: number;

  @Column({ field: 'pdf_file_name', allowNull: true, type: DataType.STRING })
  pdfFileName?: string;

  @Column({ field: 'pdf_content_type', allowNull: true, type: DataType.STRING })
  pdfContentType?: string;

  @Column({ field: 'pdf_file_size', allowNull: true, type: DataType.INTEGER })
  pdfFileSize?: number;

  @Column({ field: 'pdf_updated_at', allowNull: true, type: DataType.DATE(6) })
  pdfUpdatedAt?: Date;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'sign_token', allowNull: true, type: DataType.STRING })
  signToken?: string;

  @Column({ field: 'accepted_at', allowNull: true, type: DataType.DATE(6) })
  acceptedAt?: Date;

  @Column({ field: 'company_sign_at', allowNull: true, type: DataType.DATE(6) })
  companySignAt?: Date;

  @Column({
    field: 'company_text_signature',
    allowNull: true,
    type: DataType.STRING,
  })
  companyTextSignature?: string;

  @Column({
    field: 'customer_text_signature',
    allowNull: true,
    type: DataType.STRING,
  })
  customerTextSignature?: string;

  @Column({
    field: 'subscription_number',
    allowNull: true,
    type: DataType.STRING,
  })
  subscriptionNumber?: string;

  @Column({ field: 'cancelled_at', allowNull: true, type: DataType.DATE(6) })
  cancelledAt?: Date;

  @Column({ field: 'template_id', allowNull: true, type: DataType.INTEGER })
  templateId?: number;

  @Column({
    field: 'quote_type',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'new'::character varying"),
  })
  quoteType?: string;

  @Column({ field: 'sender_name', allowNull: true, type: DataType.STRING })
  senderName?: string;

  @Column({ field: 'sender_email', allowNull: true, type: DataType.STRING })
  senderEmail?: string;

  @Column({ field: 'recipient_name', allowNull: true, type: DataType.STRING })
  recipientName?: string;

  @Column({ field: 'recipient_email', allowNull: true, type: DataType.STRING })
  recipientEmail?: string;

  @Column({
    field: 'recipient_ip_address',
    allowNull: true,
    type: DataType.STRING,
  })
  recipientIpAddress?: string;

  @Column({
    field: 'sender_ip_address',
    allowNull: true,
    type: DataType.STRING,
  })
  senderIpAddress?: string;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({
    field: 'custom_file_attached',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  customFileAttached?: boolean;

  @Column({ field: 'pdf_masked_url', allowNull: true, type: DataType.STRING })
  pdfMaskedUrl?: string;

  @Column({
    field: 'html_template_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  htmlTemplateId?: number;

  @Column({
    field: 'customer_signature_font',
    allowNull: true,
    type: DataType.STRING,
  })
  customerSignatureFont?: string;

  @Column({
    field: 'company_signature_font',
    allowNull: true,
    type: DataType.STRING,
  })
  companySignatureFont?: string;

  @Column({ field: 'price_books_id', allowNull: true, type: DataType.INTEGER })
  priceBooksId?: number;
}
