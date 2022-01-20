import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface emailThreadMessageEventsAttributes {
  id?: number;
  requestId?: string;
  event?: string;
  ip?: string;
  location?: object;
  ts?: Date;
  companyId?: number;
  messageId?: number;
  reject?: object;
  email?: string;
}

@Table({ tableName: 'email_thread_message_events', timestamps: false })
export class emailThreadMessageEvents
  extends Model<
    emailThreadMessageEventsAttributes,
    emailThreadMessageEventsAttributes
  >
  implements emailThreadMessageEventsAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('email_thread_message_events_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'request_id', allowNull: true, type: DataType.STRING })
  requestId?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  event?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  ip?: string;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  location?: object;

  @Column({ allowNull: true, type: DataType.DATE(6) })
  ts?: Date;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'message_id', allowNull: true, type: DataType.INTEGER })
  messageId?: number;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  reject?: object;

  @Column({ allowNull: true, type: DataType.STRING })
  email?: string;
}
