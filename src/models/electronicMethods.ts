import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface electronicMethodsAttributes {
  id?: number;
  methodType?: string;
  last4?: string;
  brand?: string;
  year?: number;
  month?: number;
  firstName?: string;
  lastName?: string;
  gatewayId?: string;
  default?: boolean;
  customerId?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'electronic_methods', timestamps: false })
export class electronicMethods
  extends Model<electronicMethodsAttributes, electronicMethodsAttributes>
  implements electronicMethodsAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('electronic_methods_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'method_type', allowNull: true, type: DataType.STRING })
  methodType?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  last4?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  brand?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  year?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  month?: number;

  @Column({ field: 'first_name', allowNull: true, type: DataType.STRING })
  firstName?: string;

  @Column({ field: 'last_name', allowNull: true, type: DataType.STRING })
  lastName?: string;

  @Column({ field: 'gateway_id', allowNull: true, type: DataType.STRING })
  gatewayId?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  default?: boolean;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
