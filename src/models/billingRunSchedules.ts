import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface billingRunSchedulesAttributes {
  id?: number;
  cronTargetDate?: string;
  invoiceTimeFrame?: number;
  autoPost?: boolean;
  autoDeliver?: boolean;
  companyId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  targetTimeFrame?: number;
  dontSendIfInvoiceBalanceZero?: boolean;
  customerFilters?: object;
  doNotSendToAutoPayCustomers?: boolean;
  enabled?: boolean;
  billingRunScheduleId?: string;
  subscriptionFilters?: object;
  chargeType?: string;
  executionOrder?: number;
  doNotEmailIfInvoiceAmountZero?: boolean;
}

@Table({ tableName: 'billing_run_schedules', timestamps: false })
export class billingRunSchedules
  extends Model<billingRunSchedulesAttributes, billingRunSchedulesAttributes>
  implements billingRunSchedulesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('billing_run_schedules_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'cron_target_date', allowNull: true, type: DataType.STRING })
  cronTargetDate?: string;

  @Column({
    field: 'invoice_time_frame',
    allowNull: true,
    type: DataType.INTEGER,
  })
  invoiceTimeFrame?: number;

  @Column({ field: 'auto_post', allowNull: true, type: DataType.BOOLEAN })
  autoPost?: boolean;

  @Column({ field: 'auto_deliver', allowNull: true, type: DataType.BOOLEAN })
  autoDeliver?: boolean;

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

  @Column({
    field: 'target_time_frame',
    allowNull: true,
    type: DataType.INTEGER,
  })
  targetTimeFrame?: number;

  @Column({
    field: 'dont_send_if_invoice_balance_zero',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  dontSendIfInvoiceBalanceZero?: boolean;

  @Column({
    field: 'customer_filters',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  customerFilters?: object;

  @Column({
    field: 'do_not_send_to_auto_pay_customers',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  doNotSendToAutoPayCustomers?: boolean;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  enabled?: boolean;

  @Column({
    field: 'billing_run_schedule_id',
    allowNull: true,
    type: DataType.STRING,
  })
  billingRunScheduleId?: string;

  @Column({
    field: 'subscription_filters',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  subscriptionFilters?: object;

  @Column({ field: 'charge_type', allowNull: true, type: DataType.STRING })
  chargeType?: string;

  @Column({
    field: 'execution_order',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  executionOrder?: number;

  @Column({
    field: 'do_not_email_if_invoice_amount_zero',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  doNotEmailIfInvoiceAmountZero?: boolean;
}
