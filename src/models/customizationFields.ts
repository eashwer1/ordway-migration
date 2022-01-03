import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface customizationFieldsAttributes {
  id?: number;
  fieldLabel?: string;
  apiName?: string;
  description?: string;
  tooltipText?: string;
  fieldType?: string;
  defaultValue?: string;
  options?: object;
  uniq?: boolean;
  required?: boolean;
  displayInUi?: boolean;
  customizationId?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  displayInTable?: boolean;
  useInFilters?: boolean;
}

@Table({ tableName: 'customization_fields', timestamps: false })
export class customizationFields
  extends Model<customizationFieldsAttributes, customizationFieldsAttributes>
  implements customizationFieldsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('customization_fields_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'field_label', allowNull: true, type: DataType.STRING })
  fieldLabel?: string;

  @Column({ field: 'api_name', allowNull: true, type: DataType.STRING })
  apiName?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'tooltip_text', allowNull: true, type: DataType.STRING })
  tooltipText?: string;

  @Column({ field: 'field_type', allowNull: true, type: DataType.STRING })
  fieldType?: string;

  @Column({ field: 'default_value', allowNull: true, type: DataType.STRING })
  defaultValue?: string;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  options?: object;

  @Column({ allowNull: true, type: DataType.BOOLEAN })
  uniq?: boolean;

  @Column({ allowNull: true, type: DataType.BOOLEAN })
  required?: boolean;

  @Column({ field: 'display_in_ui', allowNull: true, type: DataType.BOOLEAN })
  displayInUi?: boolean;

  @Column({
    field: 'customization_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  customizationId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'display_in_table',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  displayInTable?: boolean;

  @Column({
    field: 'use_in_filters',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  useInFilters?: boolean;
}
