import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface delayedOperationsAttributes {
  id?: number;
  delayedJobId?: number;
  target?: string;
  result?: string;
  failCount?: number;
  successCount?: number;
  errorHeaders?: any;
  createdAt?: Date;
  updatedAt?: Date;
  csvFileName?: string;
  csvContentType?: string;
  csvFileSize?: number;
  csvUpdatedAt?: Date;
  companyId?: number;
  delayedJobType?: string;
  uiDisplay?: boolean;
}

@Table({ tableName: 'delayed_operations', timestamps: false })
export class delayedOperations
  extends Model<delayedOperationsAttributes, delayedOperationsAttributes>
  implements delayedOperationsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('delayed_operations_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'delayed_job_id', allowNull: true, type: DataType.INTEGER })
  delayedJobId?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  target?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  result?: string;

  @Column({
    field: 'fail_count',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  failCount?: number;

  @Column({
    field: 'success_count',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  successCount?: number;

  @Column({
    field: 'error_headers',
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
    defaultValue: Sequelize.literal("'{}'::character varying[]"),
  })
  errorHeaders?: any;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'csv_file_name', allowNull: true, type: DataType.STRING })
  csvFileName?: string;

  @Column({ field: 'csv_content_type', allowNull: true, type: DataType.STRING })
  csvContentType?: string;

  @Column({ field: 'csv_file_size', allowNull: true, type: DataType.INTEGER })
  csvFileSize?: number;

  @Column({ field: 'csv_updated_at', allowNull: true, type: DataType.DATE(6) })
  csvUpdatedAt?: Date;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'delayed_job_type', allowNull: true, type: DataType.STRING })
  delayedJobType?: string;

  @Column({
    field: 'ui_display',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  uiDisplay?: boolean;
}
