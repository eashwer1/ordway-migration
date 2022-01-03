import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface columnInfoAttributes {
  id?: number;
  tableName?: string;
  tableFriendlyName?: string;
  columnName?: string;
  columnFriendlyName?: string;
  columnType?: string;
  columnFormat?: string;
  filterType?: string;
  filterOptions?: object;
  isVisible?: boolean;
}

@Table({ tableName: 'column_info', timestamps: false })
export class columnInfo
  extends Model<columnInfoAttributes, columnInfoAttributes>
  implements columnInfoAttributes
{
  @Column({
    autoIncrement: true,
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('column_info_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'table_name', allowNull: true, type: DataType.STRING })
  tableName?: string;

  @Column({
    field: 'table_friendly_name',
    allowNull: true,
    type: DataType.STRING,
  })
  tableFriendlyName?: string;

  @Column({ field: 'column_name', allowNull: true, type: DataType.STRING })
  columnName?: string;

  @Column({
    field: 'column_friendly_name',
    allowNull: true,
    type: DataType.STRING,
  })
  columnFriendlyName?: string;

  @Column({ field: 'column_type', allowNull: true, type: DataType.STRING })
  columnType?: string;

  @Column({ field: 'column_format', allowNull: true, type: DataType.STRING })
  columnFormat?: string;

  @Column({ field: 'filter_type', allowNull: true, type: DataType.STRING })
  filterType?: string;

  @Column({
    field: 'filter_options',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  filterOptions?: object;

  @Column({ field: 'is_visible', allowNull: true, type: DataType.BOOLEAN })
  isVisible?: boolean;
}
