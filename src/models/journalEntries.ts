import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface journalEntriesAttributes {
  id?: number;
  journableId?: number;
  journableType?: string;
  journalEntryId?: string;
  date?: string;
  description?: string;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  journableVid?: string;
  journalEntryRunId?: number;
  customFields?: object;
  subscriptionVersionId?: number;
  customerId?: number;
  reversal?: boolean;
  currencyId?: number;
  transactionAmount?: number;
  transactionCurrency?: string;
  transactionConversionRate?: number;
}

@Table({ tableName: 'journal_entries', timestamps: false })
export class journalEntries
  extends Model<journalEntriesAttributes, journalEntriesAttributes>
  implements journalEntriesAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('journal_entries_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'journable_id', allowNull: true, type: DataType.INTEGER })
  journableId?: number;

  @Column({ field: 'journable_type', allowNull: true, type: DataType.STRING })
  journableType?: string;

  @Column({ field: 'journal_entry_id', allowNull: true, type: DataType.STRING })
  journalEntryId?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  date?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'journable_vid', allowNull: true, type: DataType.STRING })
  journableVid?: string;

  @Column({
    field: 'journal_entry_run_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  journalEntryRunId?: number;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({
    field: 'subscription_version_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  subscriptionVersionId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  reversal?: boolean;

  @Column({ field: 'currency_id', allowNull: true, type: DataType.INTEGER })
  currencyId?: number;

  @Column({
    field: 'transaction_amount',
    allowNull: true,
    type: DataType.DOUBLE,
  })
  transactionAmount?: number;

  @Column({
    field: 'transaction_currency',
    allowNull: true,
    type: DataType.STRING,
  })
  transactionCurrency?: string;

  @Column({
    field: 'transaction_conversion_rate',
    allowNull: true,
    type: DataType.DOUBLE,
  })
  transactionConversionRate?: number;
}
