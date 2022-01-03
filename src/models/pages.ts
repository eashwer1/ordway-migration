import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface pagesAttributes {
  id?: number;
  title?: string;
  type?: string;
  objectDefinitionId?: number;
  data?: object;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'pages', timestamps: false })
export class pages
  extends Model<pagesAttributes, pagesAttributes>
  implements pagesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('pages_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  title?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  type?: string;

  @Column({
    field: 'object_definition_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  objectDefinitionId?: number;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  data?: object;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
