import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface priceMatrixEntriesAttributes {
  id?: number;
  fromTier?: number;
  toTier?: number;
  priceMatrixId?: number;
  dimension_1?: string;
  dimension_2?: string;
  dimension_3?: string;
  dimension_4?: string;
  dimension_5?: string;
  price?: number;
  companyId?: number;
  customFields?: object;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'price_matrix_entries', timestamps: false })
export class priceMatrixEntries
  extends Model<priceMatrixEntriesAttributes, priceMatrixEntriesAttributes>
  implements priceMatrixEntriesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('price_matrix_entries_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'from_tier', allowNull: true, type: DataType.INTEGER })
  fromTier?: number;

  @Column({ field: 'to_tier', allowNull: true, type: DataType.INTEGER })
  toTier?: number;

  @Column({ field: 'price_matrix_id', allowNull: true, type: DataType.INTEGER })
  priceMatrixId?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  dimension_1?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  dimension_2?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  dimension_3?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  dimension_4?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  dimension_5?: string;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  price?: number;

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
