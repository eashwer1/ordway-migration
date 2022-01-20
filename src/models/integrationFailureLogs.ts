import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface integrationFailureLogsAttributes {
  id?: number;
  integrationLogId?: number;
  code?: number;
  response?: string;
  url?: string;
  createdAt?: Date;
}

@Table({ tableName: 'integration_failure_logs', timestamps: false })
export class integrationFailureLogs
  extends Model<
    integrationFailureLogsAttributes,
    integrationFailureLogsAttributes
  >
  implements integrationFailureLogsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('integration_failure_logs_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'integration_log_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  integrationLogId?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("'-1'::integer"),
  })
  code?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  response?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  url?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;
}
