import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface companiesAttributes {
  id?: number;
  name?: string;
  status?: string;
  productPricing?: object;
  createdAt?: Date;
  updatedAt?: Date;
  timezone?: string;
  phone?: string;
  email?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  logoFileName?: string;
  logoContentType?: string;
  logoFileSize?: number;
  logoUpdatedAt?: Date;
  defaultGlAccounts?: object;
  reports?: boolean;
  authenticationToken?: string;
  enableReportsDashboard?: boolean;
  termsAndConditionsUrl?: string;
  privacyPolicyUrl?: string;
  displayTermsAndPrivacy?: boolean;
  hostedPagesSubUrl?: string;
  finance?: object;
  goLive?: boolean;
  apiGateway?: string;
  ancestry?: string;
  type?: string;
  entityId?: string;
  uuid?: string;
  domain?: string;
  portalApiKey?: string;
}

@Table({ tableName: 'companies', timestamps: false })
export class companies
  extends Model<companiesAttributes, companiesAttributes>
  implements companiesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('companies_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'active'::character varying"),
  })
  status?: string;

  @Column({
    field: 'product_pricing',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  productPricing?: object;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  timezone?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  phone?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  email?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  address1?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  address2?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  city?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  state?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  zip?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'United States'::character varying"),
  })
  country?: string;

  @Column({ field: 'logo_file_name', allowNull: true, type: DataType.STRING })
  logoFileName?: string;

  @Column({
    field: 'logo_content_type',
    allowNull: true,
    type: DataType.STRING,
  })
  logoContentType?: string;

  @Column({ field: 'logo_file_size', allowNull: true, type: DataType.INTEGER })
  logoFileSize?: number;

  @Column({ field: 'logo_updated_at', allowNull: true, type: DataType.DATE(6) })
  logoUpdatedAt?: Date;

  @Column({
    field: 'default_gl_accounts',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  defaultGlAccounts?: object;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  reports?: boolean;

  @Column({
    field: 'authentication_token',
    allowNull: true,
    type: DataType.STRING(30),
  })
  authenticationToken?: string;

  @Column({
    field: 'enable_reports_dashboard',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  enableReportsDashboard?: boolean;

  @Column({
    field: 'terms_and_conditions_url',
    allowNull: true,
    type: DataType.STRING,
  })
  termsAndConditionsUrl?: string;

  @Column({
    field: 'privacy_policy_url',
    allowNull: true,
    type: DataType.STRING,
  })
  privacyPolicyUrl?: string;

  @Column({
    field: 'display_terms_and_privacy',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  displayTermsAndPrivacy?: boolean;

  @Column({
    field: 'hosted_pages_sub_url',
    allowNull: true,
    type: DataType.STRING,
  })
  hostedPagesSubUrl?: string;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal(
      '\'{"enabled": false, "je_auto_generation": false}\'::jsonb',
    ),
  })
  finance?: object;

  @Column({
    field: 'go_live',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  goLive?: boolean;

  @Column({ field: 'api_gateway', allowNull: true, type: DataType.STRING })
  apiGateway?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  ancestry?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  type?: string;

  @Column({ field: 'entity_id', allowNull: true, type: DataType.STRING })
  entityId?: string;

  @Column({ allowNull: true, type: DataType.UUID })
  uuid?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  domain?: string;

  @Column({ field: 'portal_api_key', allowNull: true, type: DataType.STRING })
  portalApiKey?: string;
}
