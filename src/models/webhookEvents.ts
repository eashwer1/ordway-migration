import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface webhookEventsAttributes {
  id?: number;
  name?: string;
  create?: boolean;
  edit?: boolean;
  remove?: boolean;
  webhookId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'webhook_events', timestamps: false })
export class webhookEvents
  extends Model<webhookEventsAttributes, webhookEventsAttributes>
  implements webhookEventsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('webhook_events_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  create?: boolean;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  edit?: boolean;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  remove?: boolean;

  @Column({ field: 'webhook_id', allowNull: true, type: DataType.INTEGER })
  webhookId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
