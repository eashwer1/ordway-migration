import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface moduleFiltersUsersAttributes {
  moduleFilterId?: number;
  userId?: number;
}

@Table({ tableName: 'module_filters_users', timestamps: false })
export class moduleFiltersUsers
  extends Model<moduleFiltersUsersAttributes, moduleFiltersUsersAttributes>
  implements moduleFiltersUsersAttributes
{
  @Column({
    field: 'module_filter_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  moduleFilterId?: number;

  @Column({ field: 'user_id', allowNull: true, type: DataType.INTEGER })
  userId?: number;
}
