import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface journalEntryLinesAttributes {
  id?: number;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  journalEntryId?: number;
  chartOfAccountId?: number;
  lineNumber?: number;
  debit?: number;
  credit?: number;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  customFields?: object;
  customerId?: number;
}

@Table({ tableName: 'journal_entry_lines', timestamps: false })
export class journalEntryLines
  extends Model<journalEntryLinesAttributes, journalEntryLinesAttributes>
  implements journalEntryLinesAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('journal_entry_lines_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'journal_entry_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  journalEntryId?: number;

  @Column({
    field: 'chart_of_account_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  chartOfAccountId?: number;

  @Column({ field: 'line_number', allowNull: true, type: DataType.INTEGER })
  lineNumber?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  debit?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  credit?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;
}
