import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface priceBookEntriesAttributes {
  id?: number;
  productId?: number;
  chargeId?: number;
  priceBookId?: number;
  effectiveFromDate?: string;
  effectiveToDate?: string;
  listPrice?: number;
  active?: boolean;
  sequence?: number;
  companyId?: number;
  customFields?: object;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'price_book_entries', timestamps: false })
export class priceBookEntries
  extends Model<priceBookEntriesAttributes, priceBookEntriesAttributes>
  implements priceBookEntriesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('price_book_entries_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'product_id', allowNull: true, type: DataType.INTEGER })
  productId?: number;

  @Column({ field: 'charge_id', allowNull: true, type: DataType.INTEGER })
  chargeId?: number;

  @Column({ field: 'price_book_id', allowNull: true, type: DataType.INTEGER })
  priceBookId?: number;

  @Column({
    field: 'effective_from_date',
    allowNull: true,
    type: DataType.STRING,
  })
  effectiveFromDate?: string;

  @Column({
    field: 'effective_to_date',
    allowNull: true,
    type: DataType.STRING,
  })
  effectiveToDate?: string;

  @Column({ field: 'list_price', allowNull: true, type: DataType.DOUBLE })
  listPrice?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  active?: boolean;

  @Column({ allowNull: true, type: DataType.INTEGER })
  sequence?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

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
