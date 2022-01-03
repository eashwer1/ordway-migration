import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface paymentProfileGatewaysAttributes {
  id?: number;
  custGatewayId?: string;
  methodDetails?: object;
  createdAt?: Date;
  updatedAt?: Date;
  companyId?: number;
  customerId?: number;
  paymentGatewayId?: number;
  testCustGatewayId?: string;
  defaultGateway?: boolean;
}

@Table({ tableName: 'payment_profile_gateways', timestamps: false })
export class paymentProfileGateways
  extends Model<
    paymentProfileGatewaysAttributes,
    paymentProfileGatewaysAttributes
  >
  implements paymentProfileGatewaysAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('payment_profile_gateways_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'cust_gateway_id', allowNull: true, type: DataType.STRING })
  custGatewayId?: string;

  @Column({
    field: 'method_details',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  methodDetails?: object;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({
    field: 'payment_gateway_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  paymentGatewayId?: number;

  @Column({
    field: 'test_cust_gateway_id',
    allowNull: true,
    type: DataType.STRING,
  })
  testCustGatewayId?: string;

  @Column({
    field: 'default_gateway',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  defaultGateway?: boolean;
}
