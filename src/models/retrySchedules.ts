import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface retrySchedulesAttributes {
  id?: number;
  active?: boolean;
  filters?: object;
  retryType?: string;
  companyId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  uuid?: string;
}

@Table({ tableName: 'retry_schedules', timestamps: false })
export class retrySchedules
  extends Model<retrySchedulesAttributes, retrySchedulesAttributes>
  implements retrySchedulesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('retry_schedules_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  active?: boolean;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  filters?: object;

  @Column({ field: 'retry_type', allowNull: true, type: DataType.STRING })
  retryType?: string;

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

  @Column({ allowNull: true, type: DataType.UUID })
  uuid?: string;
}
