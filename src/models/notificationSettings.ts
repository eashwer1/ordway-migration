import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface notificationSettingsAttributes {
  id?: number;
  userId?: number;
  roleId?: number;
  companyId?: number;
  notificationEventSettingId?: number;
  emailEnabled?: boolean;
  notificationEnabled?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'notification_settings', timestamps: false })
export class notificationSettings
  extends Model<notificationSettingsAttributes, notificationSettingsAttributes>
  implements notificationSettingsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('notification_settings_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'user_id', allowNull: true, type: DataType.INTEGER })
  userId?: number;

  @Column({ field: 'role_id', allowNull: true, type: DataType.INTEGER })
  roleId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'notification_event_setting_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  notificationEventSettingId?: number;

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
}
