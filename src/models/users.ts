import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface usersAttributes {
  id?: number;
  email?: string;
  encryptedPassword?: string;
  resetPasswordToken?: string;
  resetPasswordSentAt?: Date;
  rememberCreatedAt?: Date;
  signInCount?: number;
  currentSignInAt?: Date;
  lastSignInAt?: Date;
  currentSignInIp?: string;
  lastSignInIp?: string;
  createdAt?: Date;
  updatedAt?: Date;
  confirmationToken?: string;
  confirmedAt?: Date;
  confirmationSentAt?: Date;
  unconfirmedEmail?: string;
  userId?: string;
  authenticationToken?: string;
  name?: string;
  selectedCompanyId?: number;
  uniqueSessionId?: string;
  proxyGrandTicket?: string;
  filters?: object;
  sortings?: object;
  superUser?: boolean;
  failedAttempts?: number;
  unlockToken?: string;
  lockedAt?: Date;
  isSystemUser?: boolean;
  settings?: object;
}

@Table({ tableName: 'users', timestamps: false })
export class users
  extends Model<usersAttributes, usersAttributes>
  implements usersAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('users_id_seq'::regclass)"),
  })
  id?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  email?: string;

  @Column({
    field: 'encrypted_password',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  encryptedPassword?: string;

  @Column({
    field: 'reset_password_token',
    allowNull: true,
    type: DataType.STRING,
  })
  resetPasswordToken?: string;

  @Column({
    field: 'reset_password_sent_at',
    allowNull: true,
    type: DataType.DATE(6),
  })
  resetPasswordSentAt?: Date;

  @Column({
    field: 'remember_created_at',
    allowNull: true,
    type: DataType.DATE(6),
  })
  rememberCreatedAt?: Date;

  @Column({
    field: 'sign_in_count',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  signInCount?: number;

  @Column({
    field: 'current_sign_in_at',
    allowNull: true,
    type: DataType.DATE(6),
  })
  currentSignInAt?: Date;

  @Column({ field: 'last_sign_in_at', allowNull: true, type: DataType.DATE(6) })
  lastSignInAt?: Date;

  @Column({
    field: 'current_sign_in_ip',
    allowNull: true,
    type: DataType.STRING,
  })
  currentSignInIp?: string;

  @Column({ field: 'last_sign_in_ip', allowNull: true, type: DataType.STRING })
  lastSignInIp?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'confirmation_token',
    allowNull: true,
    type: DataType.STRING,
  })
  confirmationToken?: string;

  @Column({ field: 'confirmed_at', allowNull: true, type: DataType.DATE(6) })
  confirmedAt?: Date;

  @Column({
    field: 'confirmation_sent_at',
    allowNull: true,
    type: DataType.DATE(6),
  })
  confirmationSentAt?: Date;

  @Column({
    field: 'unconfirmed_email',
    allowNull: true,
    type: DataType.STRING,
  })
  unconfirmedEmail?: string;

  @Column({ field: 'user_id', allowNull: true, type: DataType.STRING })
  userId?: string;

  @Column({
    field: 'authentication_token',
    allowNull: true,
    type: DataType.STRING(30),
  })
  authenticationToken?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  name?: string;

  @Column({
    field: 'selected_company_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  selectedCompanyId?: number;

  @Column({
    field: 'unique_session_id',
    allowNull: true,
    type: DataType.STRING(20),
  })
  uniqueSessionId?: string;

  @Column({
    field: 'proxy_grand_ticket',
    allowNull: true,
    type: DataType.STRING,
  })
  proxyGrandTicket?: string;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  filters?: object;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  sortings?: object;

  @Column({
    field: 'super_user',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  superUser?: boolean;

  @Column({
    field: 'failed_attempts',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  failedAttempts?: number;

  @Column({ field: 'unlock_token', allowNull: true, type: DataType.STRING })
  unlockToken?: string;

  @Column({ field: 'locked_at', allowNull: true, type: DataType.DATE(6) })
  lockedAt?: Date;

  @Column({
    field: 'is_system_user',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  isSystemUser?: boolean;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  settings?: object;
}
