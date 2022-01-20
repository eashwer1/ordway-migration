import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface creditSubtotalsAttributes {
  id?: number;
  creditId?: number;
  companyId?: number;
  name?: string;
  value?: string;
  subtotalType?: string;
  string?: string;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'credit_subtotals', timestamps: false })
export class creditSubtotals
  extends Model<creditSubtotalsAttributes, creditSubtotalsAttributes>
  implements creditSubtotalsAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('credit_subtotals_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'credit_id', allowNull: true, type: DataType.INTEGER })
  creditId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ allowNull: true, type: DataType.BIGINT })
  value?: string;

  @Column({
    field: 'subtotal_type',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'tax'::character varying"),
  })
  subtotalType?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'tax'::character varying"),
  })
  string?: string;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
