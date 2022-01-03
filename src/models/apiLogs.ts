import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface apiLogsAttributes {
  id?: number;
  status?: number;
  ipAddress?: string;
  requestMethod?: string;
  url?: string;
  requestBody?: object;
  responseBody?: object;
  companyId?: number;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  responseTime?: number;
}

@Table({ tableName: 'api_logs', timestamps: false })
export class apiLogs
  extends Model<apiLogsAttributes, apiLogsAttributes>
  implements apiLogsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('api_logs_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  status?: number;

  @Column({ field: 'ip_address', allowNull: true, type: DataType.STRING })
  ipAddress?: string;

  @Column({ field: 'request_method', allowNull: true, type: DataType.STRING })
  requestMethod?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  url?: string;

  @Column({ field: 'request_body', allowNull: true, type: DataType.JSONB })
  requestBody?: object;

  @Column({ field: 'response_body', allowNull: true, type: DataType.JSONB })
  responseBody?: object;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'user_id', allowNull: true, type: DataType.INTEGER })
  userId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'response_time', allowNull: true, type: DataType.DOUBLE })
  responseTime?: number;
}
