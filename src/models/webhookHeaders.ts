import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface webhookHeadersAttributes {
  id?: number;
  key?: string;
  value?: string;
  webhookId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'webhook_headers', timestamps: false })
export class webhookHeaders
  extends Model<webhookHeadersAttributes, webhookHeadersAttributes>
  implements webhookHeadersAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('webhook_headers_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  key?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  value?: string;

  @Column({ field: 'webhook_id', allowNull: true, type: DataType.INTEGER })
  webhookId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
