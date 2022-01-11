import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface whitelistedDomainsAttributes {
  id?: number;
  name?: string;
  domain?: string;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'whitelisted_domains', timestamps: false })
export class whitelistedDomains
  extends Model<whitelistedDomainsAttributes, whitelistedDomainsAttributes>
  implements whitelistedDomainsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('whitelisted_domains_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  domain?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
