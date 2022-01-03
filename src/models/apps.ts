import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface appsAttributes {
  id?: number;
  label?: string;
  apiName?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  logoFile?: string;
  sequence?: number;
}

@Table({ tableName: 'apps', timestamps: false })
export class apps
  extends Model<appsAttributes, appsAttributes>
  implements appsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('apps_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  label?: string;

  @Column({ field: 'api_name', allowNull: true, type: DataType.STRING })
  apiName?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'logo_file', allowNull: true, type: DataType.STRING })
  logoFile?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  sequence?: number;
}
