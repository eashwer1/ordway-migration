import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface customerNoteVersionsAttributes {
  id?: number;
  description?: string;
  title?: string;
  fileUploadFileName?: string;
  fileUploadContentType?: string;
  fileUploadFileSize?: number;
  fileUploadUpdatedAt?: Date;
  userId?: number;
  companyId?: number;
  customerNoteId?: number;
  createdAt?: Date;
}

@Table({ tableName: 'customer_note_versions', timestamps: false })
export class customerNoteVersions
  extends Model<customerNoteVersionsAttributes, customerNoteVersionsAttributes>
  implements customerNoteVersionsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('customer_note_versions_id_seq'::regclass)",
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

  @Column({ field: 'user_id', allowNull: true, type: DataType.INTEGER })
  userId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'customer_note_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  customerNoteId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;
}
