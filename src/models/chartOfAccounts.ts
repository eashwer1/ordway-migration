import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface chartOfAccountsAttributes {
  id?: number;
  companyId?: number;
  accountTypeId?: number;
  code?: string;
  name?: string;
  accountSubType?: string;
  description?: string;
  balance?: number;
  status?: boolean;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  parentAccountId?: number;
  customFields?: object;
  parentEntity?: number;
}

@Table({ tableName: 'chart_of_accounts', timestamps: false })
export class chartOfAccounts
  extends Model<chartOfAccountsAttributes, chartOfAccountsAttributes>
  implements chartOfAccountsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('chart_of_accounts_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'account_type_id', allowNull: true, type: DataType.INTEGER })
  accountTypeId?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  code?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ field: 'account_sub_type', allowNull: true, type: DataType.STRING })
  accountSubType?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  balance?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  status?: boolean;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'parent_account_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  parentAccountId?: number;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({ field: 'parent_entity', allowNull: true, type: DataType.INTEGER })
  parentEntity?: number;
}
