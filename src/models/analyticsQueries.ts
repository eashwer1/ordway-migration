import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface analyticsQueriesAttributes {
  id?: number;
  uniqueName?: string;
  externalId?: string;
  queryObject?: object;
  createdAt?: Date;
}

@Table({ tableName: 'analytics_queries', timestamps: false })
export class analyticsQueries
  extends Model<analyticsQueriesAttributes, analyticsQueriesAttributes>
  implements analyticsQueriesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('analytics_queries_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'unique_name', allowNull: true, type: DataType.STRING })
  uniqueName?: string;

  @Column({ field: 'external_id', allowNull: true, type: DataType.STRING })
  externalId?: string;

  @Column({ field: 'query_object', allowNull: true, type: DataType.JSON })
  queryObject?: object;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;
}
