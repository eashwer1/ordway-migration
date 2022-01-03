import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface debuggTableAttributes {
  when?: Date;
  info?: object;
  fromTrigger?: string;
}

@Table({ tableName: 'debugg_table', timestamps: false })
export class debuggTable
  extends Model<debuggTableAttributes, debuggTableAttributes>
  implements debuggTableAttributes
{
  @Column({
    allowNull: true,
    type: DataType.DATE(6),
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  when?: Date;

  @Column({ allowNull: true, type: DataType.JSON })
  info?: object;

  @Column({ field: 'from_trigger', allowNull: true, type: DataType.STRING })
  fromTrigger?: string;
}
