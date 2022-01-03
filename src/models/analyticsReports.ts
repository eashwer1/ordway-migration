import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface analyticsReportsAttributes {
  id?: number;
  name?: string;
  description?: string;
  companyId?: number;
  userId?: number;
  externalId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  queryObject?: object;
  isPrivate?: boolean;
}

@Table({ tableName: 'analytics_reports', timestamps: false })
export class analyticsReports
  extends Model<analyticsReportsAttributes, analyticsReportsAttributes>
  implements analyticsReportsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('analytics_reports_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'user_id', allowNull: true, type: DataType.INTEGER })
  userId?: number;

  @Column({ field: 'external_id', allowNull: true, type: DataType.INTEGER })
  externalId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'query_object', allowNull: true, type: DataType.JSON })
  queryObject?: object;

  @Column({
    field: 'is_private',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  isPrivate?: boolean;
}
