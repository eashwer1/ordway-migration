import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface portalUsersAttributes {
  id?: number;
  email?: string;
  locale?: string;
  name?: string;
  status?: string;
  selectedCustomerId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  companyId?: number;
  uniqueSessionId?: string;
}

@Table({ tableName: 'portal_users', timestamps: false })
export class portalUsers
  extends Model<portalUsersAttributes, portalUsersAttributes>
  implements portalUsersAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('portal_users_id_seq'::regclass)"),
  })
  id?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  email?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'en_US'::character varying"),
  })
  locale?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  status?: string;

  @Column({
    field: 'selected_customer_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  selectedCustomerId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'unique_session_id',
    allowNull: true,
    type: DataType.STRING,
  })
  uniqueSessionId?: string;
}
