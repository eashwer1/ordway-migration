import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface delayedJobsAttributes {
  id?: number;
  priority?: number;
  attempts?: number;
  handler?: string;
  lastError?: string;
  runAt?: Date;
  lockedAt?: Date;
  failedAt?: Date;
  lockedBy?: string;
  queue?: string;
  createdAt?: Date;
  updatedAt?: Date;
  progressStage?: string;
  progressCurrent?: number;
  progressMax?: number;
  resultToEmail?: boolean;
  email?: string;
  completedIds?: any;
  target?: string;
  companyId?: number;
  targetId?: number;
  jobGroupId?: string;
  currentState?: object;
  uiDisplay?: boolean;
}

@Table({ tableName: 'delayed_jobs', timestamps: false })
export class delayedJobs
  extends Model<delayedJobsAttributes, delayedJobsAttributes>
  implements delayedJobsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('delayed_jobs_id_seq'::regclass)"),
  })
  id?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  priority?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  attempts?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  handler?: string;

  @Column({ field: 'last_error', allowNull: true, type: DataType.STRING })
  lastError?: string;

  @Column({ field: 'run_at', allowNull: true, type: DataType.DATE(6) })
  runAt?: Date;

  @Column({ field: 'locked_at', allowNull: true, type: DataType.DATE(6) })
  lockedAt?: Date;

  @Column({ field: 'failed_at', allowNull: true, type: DataType.DATE(6) })
  failedAt?: Date;

  @Column({ field: 'locked_by', allowNull: true, type: DataType.STRING })
  lockedBy?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  queue?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'progress_stage', allowNull: true, type: DataType.STRING })
  progressStage?: string;

  @Column({
    field: 'progress_current',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  progressCurrent?: number;

  @Column({
    field: 'progress_max',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  progressMax?: number;

  @Column({
    field: 'result_to_email',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  resultToEmail?: boolean;

  @Column({ allowNull: true, type: DataType.STRING })
  email?: string;

  @Column({
    field: 'completed_ids',
    allowNull: true,
    defaultValue: Sequelize.literal("'{}'::integer[]"),
    type: DataType.ARRAY(DataType.INTEGER),
  })
  completedIds?: any;

  @Column({ allowNull: true, type: DataType.STRING })
  target?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'target_id', allowNull: true, type: DataType.INTEGER })
  targetId?: number;

  @Column({ field: 'job_group_id', allowNull: true, type: DataType.STRING })
  jobGroupId?: string;

  @Column({
    field: 'current_state',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  currentState?: object;

  @Column({
    field: 'ui_display',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  uiDisplay?: boolean;
}
