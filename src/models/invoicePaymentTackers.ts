import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface invoicePaymentTackersAttributes {
  id?: number;
  paymentTrackingId?: string;
  amount?: string;
  companyId?: number;
  invoiceId?: number;
  customerId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'invoice_payment_tackers', timestamps: false })
export class invoicePaymentTackers
  extends Model<
    invoicePaymentTackersAttributes,
    invoicePaymentTackersAttributes
  >
  implements invoicePaymentTackersAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('invoice_payment_tackers_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'payment_tracking_id',
    allowNull: true,
    type: DataType.STRING,
  })
  paymentTrackingId?: string;

  @Column({ allowNull: true, type: DataType.BIGINT })
  amount?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'invoice_id', allowNull: true, type: DataType.INTEGER })
  invoiceId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
