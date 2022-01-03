import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface workflowSchedulesAttributes {
  id?: number;
  cronTargetDate?: string;
  companyId?: number;
  createdById?: number;
  updatedById?: number;
  enabled?: boolean;
  workflowId?: string;
  workflowScheduleId?: string;
  executionOrder?: number;
  createdAt?: Date;
  updatedAt?: Date;
  workflowParams?: object;
}

@Table({ tableName: 'workflow_schedules', timestamps: false })
export class workflowSchedules
  extends Model<workflowSchedulesAttributes, workflowSchedulesAttributes>
  implements workflowSchedulesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('workflow_schedules_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'cron_target_date', allowNull: true, type: DataType.STRING })
  cronTargetDate?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  enabled?: boolean;

  @Column({ field: 'workflow_id', allowNull: true, type: DataType.STRING })
  workflowId?: string;

  @Column({
    field: 'workflow_schedule_id',
    allowNull: true,
    type: DataType.STRING,
  })
  workflowScheduleId?: string;

  @Column({
    field: 'execution_order',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  executionOrder?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'workflow_params',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  workflowParams?: object;
}
