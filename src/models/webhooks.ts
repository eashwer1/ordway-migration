import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface webhooksAttributes {
  id?: number;
  name?: string;
  url?: string;
  schedule?: number;
  createdAt?: Date;
  updatedAt?: Date;
  objectName?: string;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  numberOfDeliveryAttempts?: number;
  minutesBetweenDeliveryAttempts?: number;
  notificationEmailOnContinuedFailure?: string;
}

@Table({ tableName: 'webhooks', timestamps: false })
export class webhooks
  extends Model<webhooksAttributes, webhooksAttributes>
  implements webhooksAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('webhooks_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  url?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  schedule?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'object_name', allowNull: true, type: DataType.STRING })
  objectName?: string;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'number_of_delivery_attempts',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('3'),
  })
  numberOfDeliveryAttempts?: number;

  @Column({
    field: 'minutes_between_delivery_attempts',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('30'),
  })
  minutesBetweenDeliveryAttempts?: number;

  @Column({
    field: 'notification_email_on_continued_failure',
    allowNull: true,
    type: DataType.STRING,
  })
  notificationEmailOnContinuedFailure?: string;
}
