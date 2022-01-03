import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface currencyRatesAttributes {
  id?: number;
  date?: string;
  currencyCode?: string;
  rate?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'currency_rates', timestamps: false })
export class currencyRates
  extends Model<currencyRatesAttributes, currencyRatesAttributes>
  implements currencyRatesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('currency_rates_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  date?: string;

  @Column({ field: 'currency_code', allowNull: true, type: DataType.STRING })
  currencyCode?: string;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  rate?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
