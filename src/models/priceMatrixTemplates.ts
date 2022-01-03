import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface priceMatrixTemplatesAttributes {
  id?: number;
  priceMatrixTemplateId?: string;
  name?: string;
  description?: string;
  active?: boolean;
  dimensionId_1?: number;
  dimensionId_2?: number;
  dimensionId_3?: number;
  dimensionId_4?: number;
  dimensionId_5?: number;
  companyId?: number;
  customFields?: object;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'price_matrix_templates', timestamps: false })
export class priceMatrixTemplates
  extends Model<priceMatrixTemplatesAttributes, priceMatrixTemplatesAttributes>
  implements priceMatrixTemplatesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('price_matrix_templates_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'price_matrix_template_id',
    allowNull: true,
    type: DataType.STRING,
  })
  priceMatrixTemplateId?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  active?: boolean;

  @Column({ field: 'dimension_id_1', allowNull: true, type: DataType.INTEGER })
  dimensionId_1?: number;

  @Column({ field: 'dimension_id_2', allowNull: true, type: DataType.INTEGER })
  dimensionId_2?: number;

  @Column({ field: 'dimension_id_3', allowNull: true, type: DataType.INTEGER })
  dimensionId_3?: number;

  @Column({ field: 'dimension_id_4', allowNull: true, type: DataType.INTEGER })
  dimensionId_4?: number;

  @Column({ field: 'dimension_id_5', allowNull: true, type: DataType.INTEGER })
  dimensionId_5?: number;

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
