import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface taxesAttributes {
  id?: number;
  taxId?: string;
  label?: string;
  taxPercent?: number;
  enabled?: boolean;
  zip?: string;
  city?: string;
  state?: string;
  country?: string;
  companyId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  customFields?: object;
  county?: string;
  uuid?: string;
}

@Table({ tableName: 'taxes', timestamps: false })
export class taxes
  extends Model<taxesAttributes, taxesAttributes>
  implements taxesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('taxes_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'tax_id', allowNull: true, type: DataType.STRING })
  taxId?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  label?: string;

  @Column({ field: 'tax_percent', allowNull: true, type: DataType.DOUBLE })
  taxPercent?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  enabled?: boolean;

  @Column({ allowNull: true, type: DataType.STRING })
  zip?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  city?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  state?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  country?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({ allowNull: true, type: DataType.STRING })
  county?: string;

  @Column({ allowNull: true, type: DataType.UUID })
  uuid?: string;
}
