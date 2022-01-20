import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface customerNotesAttributes {
  id?: number;
  description?: string;
  title?: string;
  fileUploadFileName?: string;
  fileUploadContentType?: string;
  fileUploadFileSize?: number;
  fileUploadUpdatedAt?: Date;
  hasVersions?: boolean;
  companyId?: number;
  customerId?: number;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'customer_notes', timestamps: false })
export class customerNotes
  extends Model<customerNotesAttributes, customerNotesAttributes>
  implements customerNotesAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('customer_notes_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  title?: string;

  @Column({
    field: 'file_upload_file_name',
    allowNull: true,
    type: DataType.STRING,
  })
  fileUploadFileName?: string;

  @Column({
    field: 'file_upload_content_type',
    allowNull: true,
    type: DataType.STRING,
  })
  fileUploadContentType?: string;

  @Column({
    field: 'file_upload_file_size',
    allowNull: true,
    type: DataType.INTEGER,
  })
  fileUploadFileSize?: number;

  @Column({
    field: 'file_upload_updated_at',
    allowNull: true,
    type: DataType.DATE(6),
  })
  fileUploadUpdatedAt?: Date;

  @Column({ field: 'has_versions', allowNull: true, type: DataType.BOOLEAN })
  hasVersions?: boolean;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'user_id', allowNull: true, type: DataType.INTEGER })
  userId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
