import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface journalEntryRunsAttributes {
  id?: number;
  journalEntryRunId?: string;
  status?: string;
  transactionDateFrom?: string;
  transactionDateTo?: string;
  financialPeriodId?: number;
  entriesCount?: number;
  transactionTypes?: object;
  journalEntryDate?: string;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  journalEntryRunScheduleId?: number;
  email?: string;
}

@Table({ tableName: 'journal_entry_runs', timestamps: false })
export class journalEntryRuns
  extends Model<journalEntryRunsAttributes, journalEntryRunsAttributes>
  implements journalEntryRunsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('journal_entry_runs_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'journal_entry_run_id',
    allowNull: true,
    type: DataType.STRING,
  })
  journalEntryRunId?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'not started'::character varying"),
  })
  status?: string;

  @Column({
    field: 'transaction_date_from',
    allowNull: true,
    type: DataType.STRING,
  })
  transactionDateFrom?: string;

  @Column({
    field: 'transaction_date_to',
    allowNull: true,
    type: DataType.STRING,
  })
  transactionDateTo?: string;

  @Column({
    field: 'financial_period_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  financialPeriodId?: number;

  @Column({
    field: 'entries_count',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  entriesCount?: number;

  @Column({ field: 'transaction_types', allowNull: true, type: DataType.JSONB })
  transactionTypes?: object;

  @Column({
    field: 'journal_entry_date',
    allowNull: true,
    type: DataType.STRING,
  })
  journalEntryDate?: string;

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

  @Column({
    field: 'journal_entry_run_schedule_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  journalEntryRunScheduleId?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  email?: string;
}
