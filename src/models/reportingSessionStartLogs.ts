import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface reportingSessionStartLogsAttributes {
  id?: number;
  eventName?: string;
  eventTime?: Date;
  eventTimePrecise?: Date;
  companyId?: number;
  userId?: number;
}

@Table({ tableName: 'reporting_session_start_logs', timestamps: false })
export class reportingSessionStartLogs
  extends Model<
    reportingSessionStartLogsAttributes,
    reportingSessionStartLogsAttributes
  >
  implements reportingSessionStartLogsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('reporting_session_start_logs_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'event_name', allowNull: true, type: DataType.STRING(100) })
  eventName?: string;

  @Column({ field: 'event_time', allowNull: true, type: DataType.DATE(6) })
  eventTime?: Date;

  @Column({
    field: 'event_time_precise',
    allowNull: true,
    type: DataType.DATE(6),
  })
  eventTimePrecise?: Date;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'user_id', allowNull: true, type: DataType.INTEGER })
  userId?: number;
}
