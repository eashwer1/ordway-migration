import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface providersAttributes {
  id?: number;
  integrationActive?: boolean;
  oauthExpired?: boolean;
  issuedAt?: Date;
  accessToken?: string;
  provider?: string;
  refreshToken?: string;
  instanceUrl?: string;
  idUrl?: string;
  signature?: string;
  sfOrgId?: string;
  sfUserId?: string;
  updatedById?: number;
  createdById?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  sandbox?: boolean;
  version?: string;
  providerSyncConfig?: object;
  packageVersion?: string;
}

@Table({ tableName: 'providers', timestamps: false })
export class providers
  extends Model<providersAttributes, providersAttributes>
  implements providersAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('providers_id_seq'::regclass)"),
  })
  id?: number;

  @Column({
    field: 'integration_active',
    allowNull: true,
    type: DataType.BOOLEAN,
  })
  integrationActive?: boolean;

  @Column({ field: 'oauth_expired', allowNull: true, type: DataType.BOOLEAN })
  oauthExpired?: boolean;

  @Column({ field: 'issued_at', allowNull: true, type: DataType.DATE(6) })
  issuedAt?: Date;

  @Column({ field: 'access_token', allowNull: true, type: DataType.STRING })
  accessToken?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  provider?: string;

  @Column({ field: 'refresh_token', allowNull: true, type: DataType.STRING })
  refreshToken?: string;

  @Column({ field: 'instance_url', allowNull: true, type: DataType.STRING })
  instanceUrl?: string;

  @Column({ field: 'id_url', allowNull: true, type: DataType.STRING })
  idUrl?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  signature?: string;

  @Column({ field: 'sf_org_id', allowNull: true, type: DataType.STRING })
  sfOrgId?: string;

  @Column({ field: 'sf_user_id', allowNull: true, type: DataType.STRING })
  sfUserId?: string;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  sandbox?: boolean;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'0'::character varying"),
  })
  version?: string;

  @Column({
    field: 'provider_sync_config',
    allowNull: true,
    type: DataType.JSONB,
  })
  providerSyncConfig?: object;

  @Column({
    field: 'package_version',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'1'::character varying"),
  })
  packageVersion?: string;
}
