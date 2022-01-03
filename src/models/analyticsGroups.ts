import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface analyticsGroupsAttributes {
  id?: number;
  name?: string;
  externalId?: number;
  companyId?: number;
  createdAt?: Date;
}

@Table({ tableName: 'analytics_groups', timestamps: false })
export class analyticsGroups
  extends Model<analyticsGroupsAttributes, analyticsGroupsAttributes>
  implements analyticsGroupsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('analytics_groups_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  name?: string;

  @Column({ field: 'external_id', allowNull: true, type: DataType.INTEGER })
  externalId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;
}
