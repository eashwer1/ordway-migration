import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface portalConfigurationsAttributes {
  id?: number;
  primaryColor?: string;
  companyId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  logoFileName?: string;
  logoContentType?: string;
  logoFileSize?: number;
  logoUpdatedAt?: Date;
  bannerFileName?: string;
  bannerContentType?: string;
  bannerFileSize?: number;
  bannerUpdatedAt?: Date;
  logoUrl?: string;
  bannerUrl?: string;
}

@Table({ tableName: 'portal_configurations', timestamps: false })
export class portalConfigurations
  extends Model<portalConfigurationsAttributes, portalConfigurationsAttributes>
  implements portalConfigurationsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('portal_configurations_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'primary_color',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'#ff7f00'::character varying"),
  })
  primaryColor?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'logo_file_name', allowNull: true, type: DataType.STRING })
  logoFileName?: string;

  @Column({
    field: 'logo_content_type',
    allowNull: true,
    type: DataType.STRING,
  })
  logoContentType?: string;

  @Column({ field: 'logo_file_size', allowNull: true, type: DataType.INTEGER })
  logoFileSize?: number;

  @Column({ field: 'logo_updated_at', allowNull: true, type: DataType.DATE(6) })
  logoUpdatedAt?: Date;

  @Column({ field: 'banner_file_name', allowNull: true, type: DataType.STRING })
  bannerFileName?: string;

  @Column({
    field: 'banner_content_type',
    allowNull: true,
    type: DataType.STRING,
  })
  bannerContentType?: string;

  @Column({
    field: 'banner_file_size',
    allowNull: true,
    type: DataType.INTEGER,
  })
  bannerFileSize?: number;

  @Column({
    field: 'banner_updated_at',
    allowNull: true,
    type: DataType.DATE(6),
  })
  bannerUpdatedAt?: Date;

  @Column({ field: 'logo_url', allowNull: true, type: DataType.STRING })
  logoUrl?: string;

  @Column({ field: 'banner_url', allowNull: true, type: DataType.STRING })
  bannerUrl?: string;
}
