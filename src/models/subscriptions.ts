import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface subscriptionsAttributes {
  id?: number;
  number?: string;
  customerId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  status?: string;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  currentVersionId?: number;
  separateInvoice?: boolean;
  customFields?: object;
  billContactId?: number;
  shippingContactId?: number;
  locked?: boolean;
  shippingContactModified?: boolean;
  priceBooksId?: number;
}

@Table({ tableName: 'subscriptions', timestamps: false })
export class subscriptions
  extends Model<subscriptionsAttributes, subscriptionsAttributes>
  implements subscriptionsAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('subscriptions_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  number?: string;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'draft'::character varying"),
  })
  status?: string;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'current_version_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  currentVersionId?: number;

  @Column({
    field: 'separate_invoice',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  separateInvoice?: boolean;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({ field: 'bill_contact_id', allowNull: true, type: DataType.INTEGER })
  billContactId?: number;

  @Column({
    field: 'shipping_contact_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  shippingContactId?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  locked?: boolean;

  @Column({
    field: 'shipping_contact_modified',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  shippingContactModified?: boolean;

  @Column({ field: 'price_books_id', allowNull: true, type: DataType.INTEGER })
  priceBooksId?: number;
}
