import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface customerPriceBooksAttributes {
  id?: number;
  customerId?: number;
  priceBookId?: number;
  companyId?: number;
  sequence?: number;
  customFields?: object;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'customer_price_books', timestamps: false })
export class customerPriceBooks
  extends Model<customerPriceBooksAttributes, customerPriceBooksAttributes>
  implements customerPriceBooksAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('customer_price_books_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'price_book_id', allowNull: true, type: DataType.INTEGER })
  priceBookId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  sequence?: number;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
