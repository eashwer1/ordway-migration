import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface quoteVersionsAttributes {
  id?: number;
  quoteId?: number;
  quoteTotalAmount?: number;
  initialTerm?: number;
  renewalTerm?: number;
  autoRenew?: boolean;
  currency?: string;
  notes?: string;
  paymentTerms?: string;
  status?: string;
  versionType?: string;
  version?: number;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  customFields?: object;
  createdAt?: Date;
  updatedAt?: Date;
  requirePaymentMethod?: boolean;
  billingStartDate?: string;
  serviceStartDate?: string;
  currentTermStartDate?: string;
  currentTermEndDate?: string;
  cancellationDate?: string;
  contractEffectiveDate?: string;
  quotePlacedAt?: string;
  quoteExpiryAt?: string;
  renewalIncrementPercent?: number;
  priceBooksId?: number;
}

@Table({ tableName: 'quote_versions', timestamps: false })
export class quoteVersions
  extends Model<quoteVersionsAttributes, quoteVersionsAttributes>
  implements quoteVersionsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('quote_versions_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'quote_id', allowNull: true, type: DataType.INTEGER })
  quoteId?: number;

  @Column({
    field: 'quote_total_amount',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  quoteTotalAmount?: number;

  @Column({ field: 'initial_term', allowNull: true, type: DataType.INTEGER })
  initialTerm?: number;

  @Column({
    field: 'renewal_term',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("'-1'::integer"),
  })
  renewalTerm?: number;

  @Column({ field: 'auto_renew', allowNull: true, type: DataType.BOOLEAN })
  autoRenew?: boolean;

  @Column({ allowNull: true, type: DataType.STRING })
  currency?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  notes?: string;

  @Column({ field: 'payment_terms', allowNull: true, type: DataType.STRING })
  paymentTerms?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  status?: string;

  @Column({
    field: 'version_type',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'New'::character varying"),
  })
  versionType?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('1'),
  })
  version?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'require_payment_method',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  requirePaymentMethod?: boolean;

  @Column({
    field: 'billing_start_date',
    allowNull: true,
    type: DataType.STRING,
  })
  billingStartDate?: string;

  @Column({
    field: 'service_start_date',
    allowNull: true,
    type: DataType.STRING,
  })
  serviceStartDate?: string;

  @Column({
    field: 'current_term_start_date',
    allowNull: true,
    type: DataType.STRING,
  })
  currentTermStartDate?: string;

  @Column({
    field: 'current_term_end_date',
    allowNull: true,
    type: DataType.STRING,
  })
  currentTermEndDate?: string;

  @Column({
    field: 'cancellation_date',
    allowNull: true,
    type: DataType.STRING,
  })
  cancellationDate?: string;

  @Column({
    field: 'contract_effective_date',
    allowNull: true,
    type: DataType.STRING,
  })
  contractEffectiveDate?: string;

  @Column({ field: 'quote_placed_at', allowNull: true, type: DataType.STRING })
  quotePlacedAt?: string;

  @Column({ field: 'quote_expiry_at', allowNull: true, type: DataType.STRING })
  quoteExpiryAt?: string;

  @Column({
    field: 'renewal_increment_percent',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  renewalIncrementPercent?: number;

  @Column({ field: 'price_books_id', allowNull: true, type: DataType.INTEGER })
  priceBooksId?: number;
}
