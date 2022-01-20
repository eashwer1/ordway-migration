import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface emailThreadMessagesAttributes {
  id?: number;
  companyId?: number;
  customerId?: number;
  from?: object;
  subject?: string;
  body?: string;
  whence?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  emailType?: number;
  recipients?: object;
  transactionId?: string;
  bcc?: object;
  status?: string;
  transactionStatus?: string;
  smtpId?: string;
  retryCount?: number;
  cc?: object;
}

@Table({ tableName: 'email_thread_messages', timestamps: false })
export class emailThreadMessages
  extends Model<emailThreadMessagesAttributes, emailThreadMessagesAttributes>
  implements emailThreadMessagesAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('email_thread_messages_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ allowNull: true, type: DataType.JSONB })
  from?: object;

  @Column({ allowNull: true, type: DataType.STRING })
  subject?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  body?: string;

  @Column({ allowNull: true, type: DataType.DATE(6) })
  whence?: Date;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'email_type',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  emailType?: number;

  @Column({ allowNull: true, type: DataType.JSONB })
  recipients?: object;

  @Column({ field: 'transaction_id', allowNull: true, type: DataType.STRING })
  transactionId?: string;

  @Column({ allowNull: true, type: DataType.JSONB })
  bcc?: object;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'Sending'::character varying"),
  })
  status?: string;

  @Column({
    field: 'transaction_status',
    allowNull: true,
    type: DataType.STRING,
  })
  transactionStatus?: string;

  @Column({ field: 'smtp_id', allowNull: true, type: DataType.STRING })
  smtpId?: string;

  @Column({
    field: 'retry_count',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  retryCount?: number;

  @Column({ allowNull: true, type: DataType.JSONB })
  cc?: object;
}
