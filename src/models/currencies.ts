import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface currenciesAttributes {
  id?: number;
  currencyCode?: string;
  currencyName?: string;
  conversionRate?: number;
  baseCurrency?: boolean;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  status?: boolean;
  effectiveDate?: string;
  system?: boolean;
  cronTargetDate?: string;
  precision?: number;
  uuid?: string;
}

@Table({ tableName: 'currencies', timestamps: false })
export class currencies
  extends Model<currenciesAttributes, currenciesAttributes>
  implements currenciesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('currencies_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'currency_code', allowNull: true, type: DataType.STRING })
  currencyCode?: string;

  @Column({ field: 'currency_name', allowNull: true, type: DataType.STRING })
  currencyName?: string;

  @Column({ field: 'conversion_rate', allowNull: true, type: DataType.DOUBLE })
  conversionRate?: number;

  @Column({
    field: 'base_currency',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  baseCurrency?: boolean;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  status?: boolean;

  @Column({ field: 'effective_date', allowNull: true, type: DataType.STRING })
  effectiveDate?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  system?: boolean;

  @Column({
    field: 'cron_target_date',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'* *'::character varying"),
  })
  cronTargetDate?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('4'),
  })
  precision?: number;

  @Column({ allowNull: true, type: DataType.UUID })
  uuid?: string;
}
