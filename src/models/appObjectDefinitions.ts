import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface appObjectDefinitionsAttributes {
  id?: number;
  appId?: number;
  objectDefinitionId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'app_object_definitions', timestamps: false })
export class appObjectDefinitions
  extends Model<appObjectDefinitionsAttributes, appObjectDefinitionsAttributes>
  implements appObjectDefinitionsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('app_object_definitions_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'app_id', allowNull: true, type: DataType.INTEGER })
  appId?: number;

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
}
