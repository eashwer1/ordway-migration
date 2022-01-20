import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface usageProcessingQueuesAttributes {
  id?: number;
  companyId?: number;
  customerId?: number;
  subscriptionId?: number;
  action?: number;
  usages?: object;
  state?: number;
  source?: string;
  error?: object;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'usage_processing_queues', timestamps: false })
export class usageProcessingQueues
  extends Model<
    usageProcessingQueuesAttributes,
    usageProcessingQueuesAttributes
  >
  implements usageProcessingQueuesAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('usage_processing_queues_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'subscription_id', allowNull: true, type: DataType.INTEGER })
  subscriptionId?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  action?: number;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  usages?: object;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  state?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  source?: string;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  error?: object;

  @Column({ field: 'user_id', allowNull: true, type: DataType.INTEGER })
  userId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
