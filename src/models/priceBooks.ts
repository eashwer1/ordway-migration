import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface priceBooksAttributes {
  id?: number;
  priceBookId?: string;
  name?: string;
  status?: string;
  currencyId?: number;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  charges?: object;
  products?: object;
  customFields?: object;
  effectiveFromDate?: string;
  effectiveToDate?: string;
}

@Table({ tableName: 'price_books', timestamps: false })
export class priceBooks
  extends Model<priceBooksAttributes, priceBooksAttributes>
  implements priceBooksAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('price_books_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'price_book_id', allowNull: true, type: DataType.STRING })
  priceBookId?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'active'::character varying"),
  })
  status?: string;

  @Column({ field: 'currency_id', allowNull: true, type: DataType.INTEGER })
  currencyId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  charges?: object;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  products?: object;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

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
}
