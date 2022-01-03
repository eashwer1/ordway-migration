import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface paymentGatewaysAttributes {
  id?: number;
  name?: string;
  credentials?: object;
  environment?: string;
  active?: boolean;
  gatewayConfiguration?: object;
  createdAt?: Date;
  updatedAt?: Date;
  companyId?: number;
  defaultGateway?: boolean;
  accountName?: string;
}

@Table({ tableName: 'payment_gateways', timestamps: false })
export class paymentGateways
  extends Model<paymentGatewaysAttributes, paymentGatewaysAttributes>
  implements paymentGatewaysAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('payment_gateways_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ allowNull: true, type: DataType.JSONB })
  credentials?: object;

  @Column({ allowNull: true, type: DataType.STRING })
  environment?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  active?: boolean;

  @Column({
    field: 'gateway_configuration',
    allowNull: true,
    type: DataType.JSONB,
  })
  gatewayConfiguration?: object;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'default_gateway',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  defaultGateway?: boolean;

  @Column({ field: 'account_name', allowNull: true, type: DataType.STRING })
  accountName?: string;
}
