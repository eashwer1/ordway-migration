import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface postingAccountsAttributes {
  id?: number;
  enabled?: boolean;
  sourceType?: string;
  sourceId?: number;
  transactionType?: string;
  debitAccountId?: number;
  creditAccountId?: number;
  companyId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'posting_accounts', timestamps: false })
export class postingAccounts
  extends Model<postingAccountsAttributes, postingAccountsAttributes>
  implements postingAccountsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('posting_accounts_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.BOOLEAN })
  enabled?: boolean;

  @Column({ field: 'source_type', allowNull: true, type: DataType.STRING })
  sourceType?: string;

  @Column({ field: 'source_id', allowNull: true, type: DataType.INTEGER })
  sourceId?: number;

  @Column({ field: 'transaction_type', allowNull: true, type: DataType.STRING })
  transactionType?: string;

  @Column({
    field: 'debit_account_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  debitAccountId?: number;

  @Column({
    field: 'credit_account_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  creditAccountId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
