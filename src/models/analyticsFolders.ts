import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface analyticsFoldersAttributes {
  id?: number;
  name?: string;
  externalId?: number;
  parentId?: number;
  contentMetadataId?: number;
  companyId?: number;
  createdAt?: Date;
}

@Table({ tableName: 'analytics_folders', timestamps: false })
export class analyticsFolders
  extends Model<analyticsFoldersAttributes, analyticsFoldersAttributes>
  implements analyticsFoldersAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('analytics_folders_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  name?: string;

  @Column({ field: 'external_id', allowNull: true, type: DataType.INTEGER })
  externalId?: number;

  @Column({ field: 'parent_id', allowNull: true, type: DataType.INTEGER })
  parentId?: number;

  @Column({
    field: 'content_metadata_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  contentMetadataId?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;
}
