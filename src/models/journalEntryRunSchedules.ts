import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface journalEntryRunSchedulesAttributes {
  id?: number;
  scheduleExecutionType?: number;
  scheduleExecutionDay?: number;
  transactionTypes?: object;
  journalEntryDate?: number;
  enabled?: boolean;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  transactionDate?: number;
  journalEntryRunScheduleId?: string;
}

@Table({ tableName: 'journal_entry_run_schedules', timestamps: false })
export class journalEntryRunSchedules
  extends Model<
    journalEntryRunSchedulesAttributes,
    journalEntryRunSchedulesAttributes
  >
  implements journalEntryRunSchedulesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('journal_entry_run_schedules_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'schedule_execution_type',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  scheduleExecutionType?: number;

  @Column({
    field: 'schedule_execution_day',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('1'),
  })
  scheduleExecutionDay?: number;

  @Column({
    field: 'transaction_types',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  transactionTypes?: object;

  @Column({
    field: 'journal_entry_date',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  journalEntryDate?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  enabled?: boolean;

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
    field: 'transaction_date',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  transactionDate?: number;

  @Column({
    field: 'journal_entry_run_schedule_id',
    allowNull: true,
    type: DataType.STRING,
  })
  journalEntryRunScheduleId?: string;
}
