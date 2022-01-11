import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface contactsAttributes {
  id?: number;
  contactId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  jobTitle?: string;
  department?: string;
  notes?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  createdDate?: Date;
  updatedDate?: Date;
  customerId?: number;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  country?: string;
  displayName?: string;
  customFields?: object;
  county?: string;
}

@Table({ tableName: 'contacts', timestamps: false })
export class contacts
  extends Model<contactsAttributes, contactsAttributes>
  implements contactsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('contacts_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'contact_id', allowNull: true, type: DataType.STRING })
  contactId?: string;

  @Column({ field: 'first_name', allowNull: true, type: DataType.STRING })
  firstName?: string;

  @Column({ field: 'last_name', allowNull: true, type: DataType.STRING })
  lastName?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  email?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  phone?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  mobile?: string;

  @Column({ field: 'job_title', allowNull: true, type: DataType.STRING })
  jobTitle?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  department?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  notes?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  address1?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  address2?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  city?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  state?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  zip?: string;

  @Column({ field: 'created_date', allowNull: true, type: DataType.DATE(6) })
  createdDate?: Date;

  @Column({ field: 'updated_date', allowNull: true, type: DataType.DATE(6) })
  updatedDate?: Date;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  country?: string;

  @Column({ field: 'display_name', allowNull: true, type: DataType.STRING })
  displayName?: string;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({ allowNull: true, type: DataType.STRING })
  county?: string;
}
