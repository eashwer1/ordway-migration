import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface matrixDimensionsAttributes {
  id?: number;
  matrixDimensionId?: string;
  name?: string;
  description?: string;
  referenceObject?: string;
  referenceField?: string;
  companyId?: number;
  customFields?: object;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'matrix_dimensions', timestamps: false })
export class matrixDimensions
  extends Model<matrixDimensionsAttributes, matrixDimensionsAttributes>
  implements matrixDimensionsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('matrix_dimensions_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'matrix_dimension_id',
    allowNull: true,
    type: DataType.STRING,
  })
  matrixDimensionId?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'reference_object', allowNull: true, type: DataType.STRING })
  referenceObject?: string;

  @Column({ field: 'reference_field', allowNull: true, type: DataType.STRING })
  referenceField?: string;

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
