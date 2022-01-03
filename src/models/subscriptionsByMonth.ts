import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface subscriptionsByMonthAttributes {
  id?: number;
  monthStart?: string;
  monthEnd?: string;
  subscriptionId?: number;
  number?: string;
  customerInternalId?: number;
  customerId?: string;
  name?: string;
  subscriptionVersionId?: number;
  currentTermStartDate?: string;
  currentTermEndDate?: string;
  cancellationDate?: string;
  autoRenew?: boolean;
  tcv?: number;
  startingMrr?: number;
  endingMrr?: number;
  nonRenewsCancels?: number;
  expansion?: number;
  contraction?: number;
  newSales?: number;
  startingCustomerId?: string;
  endingCustomerId?: string;
  nonRenewsCancelsCustomerId?: string;
  expansionCustomerId?: string;
  contractionCustomerId?: string;
  newSalesCustomerId?: string;
}

@Table({ tableName: 'subscriptions_by_month', timestamps: false })
export class subscriptionsByMonth
  extends Model<subscriptionsByMonthAttributes, subscriptionsByMonthAttributes>
  implements subscriptionsByMonthAttributes
{
  @Column({
    autoIncrement: true,
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('subscriptions_by_month_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'month_start', allowNull: true, type: DataType.STRING })
  monthStart?: string;

  @Column({ field: 'month_end', allowNull: true, type: DataType.STRING })
  monthEnd?: string;

  @Column({ field: 'subscription_id', allowNull: true, type: DataType.INTEGER })
  subscriptionId?: number;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  number?: string;

  @Column({
    field: 'customer_internal_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  customerInternalId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.STRING(255) })
  customerId?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  name?: string;

  @Column({
    field: 'subscription_version_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  subscriptionVersionId?: number;

  @Column({
    field: 'current_term_start_date',
    allowNull: true,
    type: DataType.STRING,
  })
  currentTermStartDate?: string;

  @Column({
    field: 'current_term_end_date',
    allowNull: true,
    type: DataType.STRING,
  })
  currentTermEndDate?: string;

  @Column({
    field: 'cancellation_date',
    allowNull: true,
    type: DataType.STRING,
  })
  cancellationDate?: string;

  @Column({ field: 'auto_renew', allowNull: true, type: DataType.BOOLEAN })
  autoRenew?: boolean;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  tcv?: number;

  @Column({ field: 'starting_mrr', allowNull: true, type: DataType.DOUBLE })
  startingMrr?: number;

  @Column({ field: 'ending_mrr', allowNull: true, type: DataType.DOUBLE })
  endingMrr?: number;

  @Column({
    field: 'non_renews_cancels',
    allowNull: true,
    type: DataType.DOUBLE,
  })
  nonRenewsCancels?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  expansion?: number;

  @Column({ allowNull: true, type: DataType.DOUBLE })
  contraction?: number;

  @Column({ field: 'new_sales', allowNull: true, type: DataType.DOUBLE })
  newSales?: number;

  @Column({
    field: 'starting_customer_id',
    allowNull: true,
    type: DataType.STRING(255),
  })
  startingCustomerId?: string;

  @Column({
    field: 'ending_customer_id',
    allowNull: true,
    type: DataType.STRING(255),
  })
  endingCustomerId?: string;

  @Column({
    field: 'non_renews_cancels_customer_id',
    allowNull: true,
    type: DataType.STRING(255),
  })
  nonRenewsCancelsCustomerId?: string;

  @Column({
    field: 'expansion_customer_id',
    allowNull: true,
    type: DataType.STRING(255),
  })
  expansionCustomerId?: string;

  @Column({
    field: 'contraction_customer_id',
    allowNull: true,
    type: DataType.STRING(255),
  })
  contractionCustomerId?: string;

  @Column({
    field: 'new_sales_customer_id',
    allowNull: true,
    type: DataType.STRING(255),
  })
  newSalesCustomerId?: string;
}
