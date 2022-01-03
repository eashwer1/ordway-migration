import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface statementSchedulesAttributes {
  id?: number;
  statementScheduleId?: string;
  cronTargetDate?: string;
  statementDateTimeframe?: number;
  startDateTimeframe?: string;
  endDateTimeframe?: string;
  customerFilters?: object;
  deliverByEmail?: boolean;
  enabled?: boolean;
  companyId?: number;
  templateId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'statement_schedules', timestamps: false })
export class statementSchedules
  extends Model<statementSchedulesAttributes, statementSchedulesAttributes>
  implements statementSchedulesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('statement_schedules_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'statement_schedule_id',
    allowNull: true,
    type: DataType.STRING,
  })
  statementScheduleId?: string;

  @Column({ field: 'cron_target_date', allowNull: true, type: DataType.STRING })
  cronTargetDate?: string;

  @Column({
    field: 'statement_date_timeframe',
    allowNull: true,
    type: DataType.INTEGER,
  })
  statementDateTimeframe?: number;

  @Column({
    field: 'start_date_timeframe',
    allowNull: true,
    type: DataType.STRING,
  })
  startDateTimeframe?: string;

  @Column({
    field: 'end_date_timeframe',
    allowNull: true,
    type: DataType.STRING,
  })
  endDateTimeframe?: string;

  @Column({ field: 'customer_filters', allowNull: true, type: DataType.JSONB })
  customerFilters?: object;

  @Column({
    field: 'deliver_by_email',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  deliverByEmail?: boolean;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  enabled?: boolean;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'template_id', allowNull: true, type: DataType.INTEGER })
  templateId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
