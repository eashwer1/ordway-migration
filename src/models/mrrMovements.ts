import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface mrrMovementsAttributes {
  id?: number;
  companyId?: number;
  customerId?: number;
  subscriptionId?: number;
  subscriptionChargeId?: number;
  chargeExternalId?: string;
  prevMrr?: number;
  mrr?: number;
  delta?: number;
  discount?: number;
  changeType?: number;
  dateAt?: string;
  archived?: boolean;
  custom_1?: string;
  custom_2?: string;
  custom_3?: string;
  createdAt?: Date;
}

@Table({ tableName: 'mrr_movements', timestamps: false })
export class mrrMovements
  extends Model<mrrMovementsAttributes, mrrMovementsAttributes>
  implements mrrMovementsAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('mrr_movements_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'subscription_id', allowNull: true, type: DataType.INTEGER })
  subscriptionId?: number;

  @Column({
    field: 'subscription_charge_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  subscriptionChargeId?: number;

  @Column({
    field: 'charge_external_id',
    allowNull: true,
    type: DataType.STRING,
  })
  chargeExternalId?: string;

  @Column({
    field: 'prev_mrr',
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  prevMrr?: number;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  mrr?: number;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  delta?: number;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal('0.0'),
  })
  discount?: number;

  @Column({ field: 'change_type', allowNull: true, type: DataType.INTEGER })
  changeType?: number;

  @Column({ field: 'date_at', allowNull: true, type: DataType.STRING })
  dateAt?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  archived?: boolean;

  @Column({ allowNull: true, type: DataType.STRING })
  custom_1?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  custom_2?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  custom_3?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;
}
