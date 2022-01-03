import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface testDimaMrrAttributes {
  periodId?: string;
  metricName?: string;
  mrrValue?: number;
  customerValue?: number;
}

@Table({ tableName: 'test_dima_mrr', timestamps: false })
export class testDimaMrr
  extends Model<testDimaMrrAttributes, testDimaMrrAttributes>
  implements testDimaMrrAttributes
{
  @Column({ field: 'period_id', allowNull: true, type: DataType.STRING })
  periodId?: string;

  @Column({ field: 'metric_name', allowNull: true, type: DataType.STRING })
  metricName?: string;

  @Column({ field: 'mrr_value', allowNull: true, type: DataType.DOUBLE })
  mrrValue?: number;

  @Column({ field: 'customer_value', allowNull: true, type: DataType.DOUBLE })
  customerValue?: number;
}
