import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface analyticsDataSourcesAttributes {
  id?: number;
  name?: string;
  friendlyName?: string;
  companyId?: number;
  externalId?: number;
  createdAt?: Date;
}

@Table({ tableName: 'analytics_data_sources', timestamps: false })
export class analyticsDataSources
  extends Model<analyticsDataSourcesAttributes, analyticsDataSourcesAttributes>
  implements analyticsDataSourcesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('analytics_data_sources_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  name?: string;

  @Column({
    field: 'friendly_name',
    allowNull: true,
    type: DataType.STRING(255),
  })
  friendlyName?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'external_id', allowNull: true, type: DataType.INTEGER })
  externalId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;
}
