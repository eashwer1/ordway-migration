import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface moduleFiltersAttributes {
  id?: number;
  name?: string;
  scope?: number;
  moduleName?: string;
  filterOptions?: object;
  companyId?: number;
  userId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  moduleInstanceId?: number;
}

@Table({ tableName: 'module_filters', timestamps: false })
export class moduleFilters
  extends Model<moduleFiltersAttributes, moduleFiltersAttributes>
  implements moduleFiltersAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('module_filters_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  scope?: number;

  @Column({ field: 'module_name', allowNull: true, type: DataType.STRING })
  moduleName?: string;

  @Column({ field: 'filter_options', allowNull: true, type: DataType.JSONB })
  filterOptions?: object;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'user_id', allowNull: true, type: DataType.INTEGER })
  userId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'module_instance_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  moduleInstanceId?: number;
}
