import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface notificationEventSettingsAttributes {
  id?: number;
  eventType?: string;
  emailEnabled?: boolean;
  notificationEnabled?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  category?: string;
  description?: string;
}

@Table({ tableName: 'notification_event_settings', timestamps: false })
export class notificationEventSettings
  extends Model<
    notificationEventSettingsAttributes,
    notificationEventSettingsAttributes
  >
  implements notificationEventSettingsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('notification_event_settings_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'event_type', allowNull: true, type: DataType.STRING })
  eventType?: string;

  @Column({
    field: 'email_enabled',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  emailEnabled?: boolean;

  @Column({
    field: 'notification_enabled',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  notificationEnabled?: boolean;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ allowNull: true, type: DataType.STRING })
  category?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;
}
