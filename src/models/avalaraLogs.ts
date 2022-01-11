import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface avalaraLogsAttributes {
  id?: number;
  companyId?: number;
  requestUrl?: string;
  requestMethod?: string;
  requestBody?: object;
  requestOptions?: object;
  responseBody?: object;
  responseCode?: string;
  object?: object;
  event?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'avalara_logs', timestamps: false })
export class avalaraLogs
  extends Model<avalaraLogsAttributes, avalaraLogsAttributes>
  implements avalaraLogsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('avalara_logs_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'request_url', allowNull: true, type: DataType.STRING })
  requestUrl?: string;

  @Column({ field: 'request_method', allowNull: true, type: DataType.STRING })
  requestMethod?: string;

  @Column({ field: 'request_body', allowNull: true, type: DataType.JSONB })
  requestBody?: object;

  @Column({ field: 'request_options', allowNull: true, type: DataType.JSONB })
  requestOptions?: object;

  @Column({ field: 'response_body', allowNull: true, type: DataType.JSONB })
  responseBody?: object;

  @Column({ field: 'response_code', allowNull: true, type: DataType.STRING })
  responseCode?: string;

  @Column({ allowNull: true, type: DataType.JSONB })
  object?: object;

  @Column({ allowNull: true, type: DataType.STRING })
  event?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
