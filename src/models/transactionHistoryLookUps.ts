import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface transactionHistoryLookUpsAttributes {
  id?: number;
  eventType?: number;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'transaction_history_look_ups', timestamps: false })
export class transactionHistoryLookUps
  extends Model<
    transactionHistoryLookUpsAttributes,
    transactionHistoryLookUpsAttributes
  >
  implements transactionHistoryLookUpsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('transaction_history_look_ups_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'event_type', allowNull: true, type: DataType.INTEGER })
  eventType?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
