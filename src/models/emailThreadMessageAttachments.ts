import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface emailThreadMessageAttachmentsAttributes {
  id?: number;
  messageId?: number;
  name?: string;
  fileFileName?: string;
  fileContentType?: string;
  fileFileSize?: number;
  fileUpdatedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  thumbnailPath?: string;
  companyId?: number;
  retrievalKey?: string;
}

@Table({ tableName: 'email_thread_message_attachments', timestamps: false })
export class emailThreadMessageAttachments
  extends Model<
    emailThreadMessageAttachmentsAttributes,
    emailThreadMessageAttachmentsAttributes
  >
  implements emailThreadMessageAttachmentsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('email_thread_message_attachments_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'message_id', allowNull: true, type: DataType.INTEGER })
  messageId?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ field: 'file_file_name', allowNull: true, type: DataType.STRING })
  fileFileName?: string;

  @Column({
    field: 'file_content_type',
    allowNull: true,
    type: DataType.STRING,
  })
  fileContentType?: string;

  @Column({ field: 'file_file_size', allowNull: true, type: DataType.INTEGER })
  fileFileSize?: number;

  @Column({ field: 'file_updated_at', allowNull: true, type: DataType.DATE(6) })
  fileUpdatedAt?: Date;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'thumbnail_path', allowNull: true, type: DataType.STRING })
  thumbnailPath?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'retrieval_key', allowNull: true, type: DataType.STRING })
  retrievalKey?: string;
}
