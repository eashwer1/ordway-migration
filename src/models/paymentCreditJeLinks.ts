import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface paymentCreditJeLinksAttributes {
  id?: number;
  invoicePaymentId?: number;
  invoiceCreditId?: number;
  journalEntryId?: number;
  companyId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'payment_credit_je_links', timestamps: false })
export class paymentCreditJeLinks
  extends Model<paymentCreditJeLinksAttributes, paymentCreditJeLinksAttributes>
  implements paymentCreditJeLinksAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('payment_credit_je_links_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'invoice_payment_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  invoicePaymentId?: number;

  @Column({
    field: 'invoice_credit_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  invoiceCreditId?: number;

  @Column({
    field: 'journal_entry_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  journalEntryId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
