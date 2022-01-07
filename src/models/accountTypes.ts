import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface accountTypesAttributes {
  id?: number;
  companyId?: number;
  accountType?: string;
  subTypes?: object;
  createdAt?: Date;
  updatedAt?: Date;
  customFields?: object;
}

@Table({ tableName: 'account_types', timestamps: false })
export class accountTypes
  extends Model<accountTypesAttributes, accountTypesAttributes>
  implements accountTypesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('account_types_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'account_type', allowNull: true, type: DataType.STRING })
  accountType?: string;

  @Column({
    field: 'sub_types',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  subTypes?: object;

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
}
