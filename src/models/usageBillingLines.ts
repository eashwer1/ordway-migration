import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface usageBillingLinesAttributes {
  id?: number;
  usageId?: number;
  billingScheduleLineId?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'usage_billing_lines', timestamps: false })
export class usageBillingLines
  extends Model<usageBillingLinesAttributes, usageBillingLinesAttributes>
  implements usageBillingLinesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('usage_billing_lines_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'usage_id', allowNull: true, type: DataType.INTEGER })
  usageId?: number;

  @Column({
    field: 'billing_schedule_line_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  billingScheduleLineId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
