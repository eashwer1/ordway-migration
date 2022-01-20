import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface transactionHistoriesAttributes {
  id?: number;
  invoiceId?: number;
  paymentId?: number;
  creditId?: number;
  refundId?: number;
  eventType?: number;
  amount?: string;
  transactionDate?: string;
  companyId?: number;
  customerId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'transaction_histories', timestamps: false })
export class transactionHistories
  extends Model<transactionHistoriesAttributes, transactionHistoriesAttributes>
  implements transactionHistoriesAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('transaction_histories_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'invoice_id', allowNull: true, type: DataType.INTEGER })
  invoiceId?: number;

  @Column({ field: 'payment_id', allowNull: true, type: DataType.INTEGER })
  paymentId?: number;

  @Column({ field: 'credit_id', allowNull: true, type: DataType.INTEGER })
  creditId?: number;

  @Column({ field: 'refund_id', allowNull: true, type: DataType.INTEGER })
  refundId?: number;

  @Column({ field: 'event_type', allowNull: true, type: DataType.INTEGER })
  eventType?: number;

  @Column({ allowNull: true, type: DataType.BIGINT })
  amount?: string;

  @Column({ field: 'transaction_date', allowNull: true, type: DataType.STRING })
  transactionDate?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
