import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface auditLogsAttributes {
  id?: number;
  action?: string;
  source?: string;
  userId?: number;
  ipAddress?: string;
  object?: object;
  auditableClassName?: string;
  auditableShowId?: string;
  createdAt?: Date;
  companyId?: number;
}

@Table({ tableName: 'audit_logs', timestamps: false })
export class auditLogs
  extends Model<auditLogsAttributes, auditLogsAttributes>
  implements auditLogsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('audit_logs_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  action?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'ui'::character varying"),
  })
  source?: string;

  @Column({ field: 'user_id', allowNull: true, type: DataType.INTEGER })
  userId?: number;

  @Column({ field: 'ip_address', allowNull: true, type: DataType.STRING })
  ipAddress?: string;

  @Column({ allowNull: true, type: DataType.JSONB })
  object?: object;

  @Column({
    field: 'auditable_class_name',
    allowNull: true,
    type: DataType.STRING,
  })
  auditableClassName?: string;

  @Column({
    field: 'auditable_show_id',
    allowNull: true,
    type: DataType.STRING,
  })
  auditableShowId?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;
}
