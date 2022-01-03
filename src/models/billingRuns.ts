import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface billingRunsAttributes {
  id?: number;
  targetAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  status?: number;
  billingRunId?: string;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  invoicesTotal?: string;
  invoicesCount?: number;
  customersCount?: number;
  customerFilterOptions?: object;
  invoiceAt?: Date;
  subscriptionFilterOptions?: object;
  createdBySchedule?: boolean;
  chargeType?: string;
  emailAudit?: object;
  postOptions?: object;
  totalCustomersCount?: number;
}

@Table({ tableName: 'billing_runs', timestamps: false })
export class billingRuns
  extends Model<billingRunsAttributes, billingRunsAttributes>
  implements billingRunsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('billing_runs_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'target_at', allowNull: true, type: DataType.DATE(6) })
  targetAt?: Date;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("'-1'::integer"),
  })
  status?: number;

  @Column({ field: 'billing_run_id', allowNull: true, type: DataType.STRING })
  billingRunId?: string;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'invoices_total',
    allowNull: true,
    type: DataType.BIGINT,
    defaultValue: Sequelize.literal('0'),
  })
  invoicesTotal?: string;

  @Column({
    field: 'invoices_count',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  invoicesCount?: number;

  @Column({
    field: 'customers_count',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  customersCount?: number;

  @Column({
    field: 'customer_filter_options',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customerFilterOptions?: object;

  @Column({ field: 'invoice_at', allowNull: true, type: DataType.DATE(6) })
  invoiceAt?: Date;

  @Column({
    field: 'subscription_filter_options',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  subscriptionFilterOptions?: object;

  @Column({
    field: 'created_by_schedule',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  createdBySchedule?: boolean;

  @Column({ field: 'charge_type', allowNull: true, type: DataType.STRING })
  chargeType?: string;

  @Column({ field: 'email_audit', allowNull: true, type: DataType.JSONB })
  emailAudit?: object;

  @Column({ field: 'post_options', allowNull: true, type: DataType.JSONB })
  postOptions?: object;

  @Column({
    field: 'total_customers_count',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  totalCustomersCount?: number;
}
