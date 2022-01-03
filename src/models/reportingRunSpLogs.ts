import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface reportingRunSpLogsAttributes {
  id?: number;
  eventName?: string;
  elementId?: string;
  eventTime?: Date;
  eventTimePrecise?: Date;
  eventDuration?: number;
  rowCount?: number;
  spParameterIds?: string;
  spName?: string;
  companyId?: number;
  userId?: number;
}

@Table({ tableName: 'reporting_run_sp_logs', timestamps: false })
export class reportingRunSpLogs
  extends Model<reportingRunSpLogsAttributes, reportingRunSpLogsAttributes>
  implements reportingRunSpLogsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('reporting_run_sp_logs_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'event_name', allowNull: true, type: DataType.STRING(100) })
  eventName?: string;

  @Column({ field: 'element_id', allowNull: true, type: DataType.STRING(100) })
  elementId?: string;

  @Column({ field: 'event_time', allowNull: true, type: DataType.DATE(6) })
  eventTime?: Date;

  @Column({
    field: 'event_time_precise',
    allowNull: true,
    type: DataType.DATE(6),
  })
  eventTimePrecise?: Date;

  @Column({ field: 'event_duration', allowNull: true, type: DataType.INTEGER })
  eventDuration?: number;

  @Column({ field: 'row_count', allowNull: true, type: DataType.INTEGER })
  rowCount?: number;

  @Column({
    field: 'sp_parameter_ids',
    allowNull: true,
    type: DataType.STRING(1000),
  })
  spParameterIds?: string;

  @Column({ field: 'sp_name', allowNull: true, type: DataType.STRING(100) })
  spName?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'user_id', allowNull: true, type: DataType.INTEGER })
  userId?: number;
}
