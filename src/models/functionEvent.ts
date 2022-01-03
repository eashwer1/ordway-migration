import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface functionEventAttributes {
  id?: number;
  functionName?: string;
  relevantId?: string;
  description?: string;
  executeTs?: Date;
}

@Table({ tableName: 'function_event', timestamps: false })
export class functionEvent
  extends Model<functionEventAttributes, functionEventAttributes>
  implements functionEventAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('function_event_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'function_name',
    allowNull: true,
    type: DataType.STRING(256),
  })
  functionName?: string;

  @Column({ field: 'relevant_id', allowNull: true, type: DataType.STRING(256) })
  relevantId?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'execute_ts', allowNull: true, type: DataType.DATE(6) })
  executeTs?: Date;
}
