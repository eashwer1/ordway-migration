import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface customizationFormulasAttributes {
  id?: number;
  formula?: object;
  advancedOptions?: object;
  fieldReturnType?: string;
  customizationFieldId?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  uuid?: string;
}

@Table({ tableName: 'customization_formulas', timestamps: false })
export class customizationFormulas
  extends Model<
    customizationFormulasAttributes,
    customizationFormulasAttributes
  >
  implements customizationFormulasAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('customization_formulas_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.JSONB })
  formula?: object;

  @Column({
    field: 'advanced_options',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  advancedOptions?: object;

  @Column({
    field: 'field_return_type',
    allowNull: true,
    type: DataType.STRING,
  })
  fieldReturnType?: string;

  @Column({
    field: 'customization_field_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  customizationFieldId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ allowNull: true, type: DataType.UUID })
  uuid?: string;
}
