import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface usersCompaniesAttributes {
  id?: number;
  userId?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  roleId?: number;
  active?: boolean;
  isTempAccess?: boolean;
  expiryTimeMins?: number;
  inactivityTimeUom?: string;
}

@Table({ tableName: 'users_companies', timestamps: false })
export class usersCompanies
  extends Model<usersCompaniesAttributes, usersCompaniesAttributes>
  implements usersCompaniesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('users_companies_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'user_id', allowNull: true, type: DataType.INTEGER })
  userId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'role_id', allowNull: true, type: DataType.INTEGER })
  roleId?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  active?: boolean;

  @Column({
    field: 'is_temp_access',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  isTempAccess?: boolean;

  @Column({
    field: 'expiry_time_mins',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('60'),
  })
  expiryTimeMins?: number;

  @Column({
    field: 'inactivity_time_uom',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'min'::character varying"),
  })
  inactivityTimeUom?: string;
}
