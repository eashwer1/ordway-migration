import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface delayedProgressesAttributes {
  id?: number;
  progressStage?: string;
  progressCurrent?: number;
  progressMax?: number;
  delayedJobId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'delayed_progresses', timestamps: false })
export class delayedProgresses
  extends Model<delayedProgressesAttributes, delayedProgressesAttributes>
  implements delayedProgressesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('delayed_progresses_id_seq'::regclass)",
    ),
  })
  id?: number;

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

  @Column({ field: 'delayed_job_id', allowNull: true, type: DataType.INTEGER })
  delayedJobId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
