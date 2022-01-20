import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface invoicePaymentsAttributes {
  id?: number;
  paymentId?: number;
  invoiceId?: number;
  amountApplied?: string;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  companyId?: number;
  conversionRate?: number;
  customFields?: object;
  isRefunded?: boolean;
}

@Table({ tableName: 'invoice_payments', timestamps: false })
export class invoicePayments
  extends Model<invoicePaymentsAttributes, invoicePaymentsAttributes>
  implements invoicePaymentsAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('invoice_payments_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'payment_id', allowNull: true, type: DataType.INTEGER })
  paymentId?: number;

  @Column({ field: 'invoice_id', allowNull: true, type: DataType.INTEGER })
  invoiceId?: number;

  @Column({ field: 'amount_applied', allowNull: true, type: DataType.BIGINT })
  amountApplied?: string;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'conversion_rate',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('1.0'),
  })
  conversionRate?: number;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({
    field: 'is_refunded',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  isRefunded?: boolean;
}
