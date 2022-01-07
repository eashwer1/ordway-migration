import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface dropdownTaxonomiesAttributes {
  id?: number;
  categoryType?: string;
  taxonomy?: object;
  subType?: string;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'dropdown_taxonomies', timestamps: false })
export class dropdownTaxonomies
  extends Model<dropdownTaxonomiesAttributes, dropdownTaxonomiesAttributes>
  implements dropdownTaxonomiesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('dropdown_taxonomies_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'category_type', allowNull: true, type: DataType.STRING })
  categoryType?: string;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  taxonomy?: object;

  @Column({ field: 'sub_type', allowNull: true, type: DataType.STRING })
  subType?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
