import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface objectDefinitionsAttributes {
  id?: number;
  label?: string;
  description?: string;
  apiName?: string;
  published?: boolean;
  fields?: object;
  createdAt?: Date;
  updatedAt?: Date;
  icon?: string;
  recordName?: string;
  code?: string;
  relationships?: object;
}

@Table({ tableName: 'object_definitions', timestamps: false })
export class objectDefinitions
  extends Model<objectDefinitionsAttributes, objectDefinitionsAttributes>
  implements objectDefinitionsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('object_definitions_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  label?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  description?: string;

  @Column({ field: 'api_name', allowNull: true, type: DataType.STRING })
  apiName?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  published?: boolean;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  fields?: object;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  icon?: string;

  @Column({ field: 'record_name', allowNull: true, type: DataType.STRING })
  recordName?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  code?: string;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  relationships?: object;
}
