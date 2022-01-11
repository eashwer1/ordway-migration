import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface archiveRetryJobsAttributes {
  id?: number;
  sourceId?: any;
  sourceType?: string;
  status?: string;
  ruleOrder?: number;
  description?: string;
  attempts?: number;
  lastFailedOn?: Date;
  retryScheduleId?: number;
  customerId?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'archive_retry_jobs', timestamps: false })
export class archiveRetryJobs
  extends Model<archiveRetryJobsAttributes, archiveRetryJobsAttributes>
  implements archiveRetryJobsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('archive_retry_jobs_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'source_id',
    type: DataType.ARRAY(DataType.INTEGER),
    allowNull: true,
    defaultValue: Sequelize.literal("'{}'::integer[]"),
  })
  sourceId?: number[];

  @Column({ field: 'source_type', allowNull: true, type: DataType.STRING })
  sourceType?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  status?: string;

  @Column({ field: 'rule_order', allowNull: true, type: DataType.INTEGER })
  ruleOrder?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  attempts?: number;

  @Column({ field: 'last_failed_on', allowNull: true, type: DataType.DATE(6) })
  lastFailedOn?: Date;

  @Column({
    field: 'retry_schedule_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  retryScheduleId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
