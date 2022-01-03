import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface consolidatedExchangeRatesAttributes {
  id?: number;
  financialPeriodId?: number;
  currencyId?: number;
  companyId?: number;
  avgRate?: number;
  eomRate?: number;
  userOverride?: boolean;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'consolidated_exchange_rates', timestamps: false })
export class consolidatedExchangeRates
  extends Model<
    consolidatedExchangeRatesAttributes,
    consolidatedExchangeRatesAttributes
  >
  implements consolidatedExchangeRatesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('consolidated_exchange_rates_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'financial_period_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  financialPeriodId?: number;

  @Column({ field: 'currency_id', allowNull: true, type: DataType.INTEGER })
  currencyId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'avg_rate',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  avgRate?: number;

  @Column({
    field: 'eom_rate',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  eomRate?: number;

  @Column({
    field: 'user_override',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  userOverride?: boolean;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
