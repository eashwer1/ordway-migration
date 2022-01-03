import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface tableDefaultsAttributes {
  id?: number;
  tableName?: string;
  defaultValues?: object;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'table_defaults', timestamps: false })
export class tableDefaults
  extends Model<tableDefaultsAttributes, tableDefaultsAttributes>
  implements tableDefaultsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('table_defaults_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'table_name', allowNull: true, type: DataType.STRING })
  tableName?: string;

  @Column({ field: 'default_values', allowNull: true, type: DataType.JSONB })
  defaultValues?: object;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
