import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface jobProcessTrackersAttributes {
  id?: number;
  processId?: number;
  jobId?: number;
  hostId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  markSigtermed?: boolean;
}

@Table({ tableName: 'job_process_trackers', timestamps: false })
export class jobProcessTrackers
  extends Model<jobProcessTrackersAttributes, jobProcessTrackersAttributes>
  implements jobProcessTrackersAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('job_process_trackers_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'process_id', allowNull: true, type: DataType.INTEGER })
  processId?: number;

  @Column({ field: 'job_id', allowNull: true, type: DataType.INTEGER })
  jobId?: number;

  @Column({ field: 'host_id', allowNull: true, type: DataType.STRING })
  hostId?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'mark_sigtermed',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  markSigtermed?: boolean;
}
