import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface recordsAttributes {
  id?: number;
  deleted?: boolean;
  deletedAt?: Date;
  data?: object;
  history?: object;
  objectDefinitionId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  type?: string;
}

@Table({ tableName: 'records', timestamps: false })
export class records
  extends Model<recordsAttributes, recordsAttributes>
  implements recordsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('records_id_seq'::regclass)"),
  })
  id?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  deleted?: boolean;

  @Column({ field: 'deleted_at', allowNull: true, type: DataType.DATE(6) })
  deletedAt?: Date;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  data?: object;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  history?: object;

  @Column({
    field: 'object_definition_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  objectDefinitionId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ allowNull: true, type: DataType.STRING })
  type?: string;
}
