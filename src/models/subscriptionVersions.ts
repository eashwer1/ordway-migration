import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface subscriptionVersionsAttributes {
  id?: number;
  subscriptionId?: number;
  orderPlacedAt?: string;
  initialTerm?: number;
  autoRenew?: boolean;
  currency?: string;
  notes?: string;
  status?: string;
  contractEffectiveDate?: string;
  createdAt?: Date;
  updatedAt?: Date;
  cancellationDate?: string;
  versionType?: string;
  version?: number;
  currentTermEndDate?: string;
  billingComplete?: boolean;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  currentTermStartDate?: string;
  renewalTerm?: number;
  serviceStartDate?: string;
  billingStartDate?: string;
  customFields?: object;
  mrr?: string;
  lifetimeInvoiced?: string;
  tcv?: string;
  acv?: string;
  couponCode?: string;
  deferStartDate?: boolean;
  currencyId?: number;
  paymentTermId?: number;
  renewalIncrementPercent?: number;
  closedFpContract?: number;
  openFpDate?: Date;
  cmrr?: string;
  discountedCmrr?: string;
  conversionRate?: number;
  priceBooksId?: number;
  versionData?: object;
  prevVersionId?: number;
}

@Table({ tableName: 'subscription_versions', timestamps: false })
export class subscriptionVersions
  extends Model<subscriptionVersionsAttributes, subscriptionVersionsAttributes>
  implements subscriptionVersionsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('subscription_versions_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'subscription_id', allowNull: true, type: DataType.INTEGER })
  subscriptionId?: number;

  @Column({ field: 'order_placed_at', allowNull: true, type: DataType.STRING })
  orderPlacedAt?: string;

  @Column({ field: 'initial_term', allowNull: true, type: DataType.INTEGER })
  initialTerm?: number;

  @Column({ field: 'auto_renew', allowNull: true, type: DataType.BOOLEAN })
  autoRenew?: boolean;

  @Column({ allowNull: true, type: DataType.STRING })
  currency?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  notes?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  status?: string;

  @Column({
    field: 'contract_effective_date',
    allowNull: true,
    type: DataType.STRING,
  })
  contractEffectiveDate?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'cancellation_date',
    allowNull: true,
    type: DataType.STRING,
  })
  cancellationDate?: string;

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

  @Column({
    field: 'current_term_end_date',
    allowNull: true,
    type: DataType.STRING,
  })
  currentTermEndDate?: string;

  @Column({
    field: 'billing_complete',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  billingComplete?: boolean;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'current_term_start_date',
    allowNull: true,
    type: DataType.STRING,
  })
  currentTermStartDate?: string;

  @Column({
    field: 'renewal_term',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("'-1'::integer"),
  })
  renewalTerm?: number;

  @Column({
    field: 'service_start_date',
    allowNull: true,
    type: DataType.STRING,
  })
  serviceStartDate?: string;

  @Column({
    field: 'billing_start_date',
    allowNull: true,
    type: DataType.STRING,
  })
  billingStartDate?: string;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  mrr?: string;

  @Column({
    field: 'lifetime_invoiced',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  lifetimeInvoiced?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  tcv?: string;

  @Column({
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  acv?: string;

  @Column({ field: 'coupon_code', allowNull: true, type: DataType.STRING })
  couponCode?: string;

  @Column({
    field: 'defer_start_date',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  deferStartDate?: boolean;

  @Column({ field: 'currency_id', allowNull: true, type: DataType.INTEGER })
  currencyId?: number;

  @Column({ field: 'payment_term_id', allowNull: true, type: DataType.INTEGER })
  paymentTermId?: number;

  @Column({
    field: 'renewal_increment_percent',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  renewalIncrementPercent?: number;

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
    field: 'conversion_rate',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('1.0'),
  })
  conversionRate?: number;

  @Column({ field: 'price_books_id', allowNull: true, type: DataType.INTEGER })
  priceBooksId?: number;

  @Column({
    field: 'version_data',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  versionData?: object;

  @Column({ field: 'prev_version_id', allowNull: true, type: DataType.INTEGER })
  prevVersionId?: number;
}
