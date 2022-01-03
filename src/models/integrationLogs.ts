import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface integrationLogsAttributes {
  id?: number;
  status?: number;
  url?: string;
  code?: number;
  response?: string;
  failCount?: number;
  companyId?: number;
  webhookId?: number;
  integrationEventId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'integration_logs', timestamps: false })
export class integrationLogs
  extends Model<integrationLogsAttributes, integrationLogsAttributes>
  implements integrationLogsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('integration_logs_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  status?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  url?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  code?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  response?: string;

  @Column({
    field: 'fail_count',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  failCount?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'webhook_id', allowNull: true, type: DataType.INTEGER })
  webhookId?: number;

  @Column({
    field: 'integration_event_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  integrationEventId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
