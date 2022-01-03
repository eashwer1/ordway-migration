import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface reportingBuildReportLogsAttributes {
  id?: number;
  eventName?: string;
  elementId?: string;
  eventTime?: Date;
  eventTimePrecise?: Date;
  eventDuration?: number;
  reportId?: string;
  bookmarkId?: string;
  companyId?: number;
  userId?: number;
  sessionId?: string;
  other?: string;
}

@Table({ tableName: 'reporting_build_report_logs', timestamps: false })
export class reportingBuildReportLogs
  extends Model<
    reportingBuildReportLogsAttributes,
    reportingBuildReportLogsAttributes
  >
  implements reportingBuildReportLogsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('reporting_build_report_logs_id_seq'::regclass)",
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

  @Column({ field: 'report_id', allowNull: true, type: DataType.STRING(100) })
  reportId?: string;

  @Column({ field: 'bookmark_id', allowNull: true, type: DataType.STRING(100) })
  bookmarkId?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'user_id', allowNull: true, type: DataType.INTEGER })
  userId?: number;

  @Column({ field: 'session_id', allowNull: true, type: DataType.STRING(100) })
  sessionId?: string;

  @Column({ allowNull: true, type: DataType.STRING(20000) })
  other?: string;
}
