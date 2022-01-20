import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface portalUserCustomersAttributes {
  id?: number;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  portalUserId?: number;
  customerId?: number;
  companyId?: number;
  contactId?: number;
}

@Table({ tableName: 'portal_user_customers', timestamps: false })
export class portalUserCustomers
  extends Model<portalUserCustomersAttributes, portalUserCustomersAttributes>
  implements portalUserCustomersAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('portal_user_customers_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  status?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'portal_user_id', allowNull: true, type: DataType.INTEGER })
  portalUserId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'contact_id', allowNull: true, type: DataType.INTEGER })
  contactId?: number;
}
