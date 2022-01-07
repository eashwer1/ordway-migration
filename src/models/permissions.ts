import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface permissionsAttributes {
  id?: number;
  roleId?: number;
  companyId?: number;
  module?: string;
  activity?: string;
  permissions?: object;
  createdById?: number;
  updatedById?: number;
}

@Table({ tableName: 'permissions', timestamps: false })
export class permissions
  extends Model<permissionsAttributes, permissionsAttributes>
  implements permissionsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('permissions_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'role_id', allowNull: true, type: DataType.INTEGER })
  roleId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  module?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  activity?: string;

  @Column({ allowNull: true, type: DataType.JSONB })
  permissions?: object;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;
}
