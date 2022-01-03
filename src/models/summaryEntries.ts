import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface summaryEntriesAttributes {
  id?: number;
  transactionName?: string;
  transactionsCount?: number;
  accounts?: object;
  companyId?: number;
  financialPeriodId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'summary_entries', timestamps: false })
export class summaryEntries
  extends Model<summaryEntriesAttributes, summaryEntriesAttributes>
  implements summaryEntriesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('summary_entries_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'transaction_name', allowNull: true, type: DataType.STRING })
  transactionName?: string;

  @Column({
    field: 'transactions_count',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  transactionsCount?: number;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  accounts?: object;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'financial_period_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  financialPeriodId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
