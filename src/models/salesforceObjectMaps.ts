import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface salesforceObjectMapsAttributes {
  id?: number;
  companyId?: number;
  ordwayObject?: string;
  salesforceObject?: string;
  attributeMaps?: object;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  mappingType?: string;
  version?: string;
}

@Table({ tableName: 'salesforce_object_maps', timestamps: false })
export class salesforceObjectMaps
  extends Model<salesforceObjectMapsAttributes, salesforceObjectMapsAttributes>
  implements salesforceObjectMapsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('salesforce_object_maps_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'ordway_object', allowNull: true, type: DataType.STRING })
  ordwayObject?: string;

  @Column({
    field: 'salesforce_object',
    allowNull: true,
    type: DataType.STRING,
  })
  salesforceObject?: string;

  @Column({ field: 'attribute_maps', allowNull: true, type: DataType.JSONB })
  attributeMaps?: object;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'mapping_type',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'forward'::character varying"),
  })
  mappingType?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  version?: string;
}
