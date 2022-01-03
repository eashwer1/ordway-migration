import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface passwordsAttributes {
  id?: number;
  password?: string;
  previousPasswords?: object;
  failedAttempts?: number;
  accountLocked?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  companyId?: number;
  portalUserId?: number;
}

@Table({ tableName: 'passwords', timestamps: false })
export class passwords
  extends Model<passwordsAttributes, passwordsAttributes>
  implements passwordsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('passwords_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  password?: string;

  @Column({
    field: 'previous_passwords',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  previousPasswords?: object;

  @Column({
    field: 'failed_attempts',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  failedAttempts?: number;

  @Column({
    field: 'account_locked',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  accountLocked?: boolean;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'portal_user_id', allowNull: true, type: DataType.INTEGER })
  portalUserId?: number;
}
