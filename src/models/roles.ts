import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface rolesAttributes {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  companyId?: number;
  createdById?: number;
  updatedById?: number;
  parentEntity?: number;
}

@Table({ tableName: 'roles', timestamps: false })
export class roles
  extends Model<rolesAttributes, rolesAttributes>
  implements rolesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('roles_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'parent_entity', allowNull: true, type: DataType.INTEGER })
  parentEntity?: number;
}
