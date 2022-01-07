import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface billingPeriodsAttributes {
  id?: number;
  name?: string;
  periodLength?: number;
  periodUnit?: string;
  active?: boolean;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  periodType?: string;
  contractSchedule?: object;
}

@Table({ tableName: 'billing_periods', timestamps: false })
export class billingPeriods
  extends Model<billingPeriodsAttributes, billingPeriodsAttributes>
  implements billingPeriodsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('billing_periods_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({
    field: 'period_length',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('1'),
  })
  periodLength?: number;

  @Column({
    field: 'period_unit',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'months'::character varying"),
  })
  periodUnit?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  active?: boolean;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'period_type',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'F'::character varying"),
  })
  periodType?: string;

  @Column({
    field: 'contract_schedule',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  contractSchedule?: object;
}
