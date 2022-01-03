import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface resyncSchedulesAttributes {
  id?: number;
  cronTargetDate?: string;
  enabled?: boolean;
  integrationName?: string;
  moduleName?: string;
  timePeriod?: string;
  endDate?: string;
  emailAddresses?: string;
  sendResult?: boolean;
  frequencyPeriod?: string;
  dayOfMonth?: string;
  weekdays?: object;
  companyId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'resync_schedules', timestamps: false })
export class resyncSchedules
  extends Model<resyncSchedulesAttributes, resyncSchedulesAttributes>
  implements resyncSchedulesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('resync_schedules_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'cron_target_date', allowNull: true, type: DataType.STRING })
  cronTargetDate?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  enabled?: boolean;

  @Column({ field: 'integration_name', allowNull: true, type: DataType.STRING })
  integrationName?: string;

  @Column({ field: 'module_name', allowNull: true, type: DataType.STRING })
  moduleName?: string;

  @Column({ field: 'time_period', allowNull: true, type: DataType.STRING })
  timePeriod?: string;

  @Column({ field: 'end_date', allowNull: true, type: DataType.STRING })
  endDate?: string;

  @Column({ field: 'email_addresses', allowNull: true, type: DataType.STRING })
  emailAddresses?: string;

  @Column({ field: 'send_result', allowNull: true, type: DataType.BOOLEAN })
  sendResult?: boolean;

  @Column({ field: 'frequency_period', allowNull: true, type: DataType.STRING })
  frequencyPeriod?: string;

  @Column({ field: 'day_of_month', allowNull: true, type: DataType.STRING })
  dayOfMonth?: string;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  weekdays?: object;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
