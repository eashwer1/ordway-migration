import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface creditLineTaxesAttributes {
  id?: number;
  creditLineId?: number;
  creditId?: number;
  name?: string;
  value?: string;
  companyId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'credit_line_taxes', timestamps: false })
export class creditLineTaxes
  extends Model<creditLineTaxesAttributes, creditLineTaxesAttributes>
  implements creditLineTaxesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('credit_line_taxes_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'credit_line_id', allowNull: true, type: DataType.INTEGER })
  creditLineId?: number;

  @Column({ field: 'credit_id', allowNull: true, type: DataType.INTEGER })
  creditId?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ allowNull: true, type: DataType.BIGINT })
  value?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
