import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface stripeWebhookLogsAttributes {
  id?: number;
  evtId?: string;
  objectId?: string;
  apiVersion?: string;
  ts?: Date;
  data?: object;
  livemode?: boolean;
  request?: object;
  evtType?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'stripe_webhook_logs', timestamps: false })
export class stripeWebhookLogs
  extends Model<stripeWebhookLogsAttributes, stripeWebhookLogsAttributes>
  implements stripeWebhookLogsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('stripe_webhook_logs_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'evt_id', allowNull: true, type: DataType.STRING })
  evtId?: string;

  @Column({ field: 'object_id', allowNull: true, type: DataType.STRING })
  objectId?: string;

  @Column({ field: 'api_version', allowNull: true, type: DataType.STRING })
  apiVersion?: string;

  @Column({ allowNull: true, type: DataType.DATE(6) })
  ts?: Date;

  @Column({ allowNull: true, type: DataType.JSONB })
  data?: object;

  @Column({ allowNull: true, type: DataType.BOOLEAN })
  livemode?: boolean;

  @Column({ allowNull: true, type: DataType.JSONB })
  request?: object;

  @Column({ field: 'evt_type', allowNull: true, type: DataType.STRING })
  evtType?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
