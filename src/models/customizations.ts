import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface customizationsAttributes {
  id?: number;
  objectName?: string;
  apiName?: string;
  description?: string;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'customizations', timestamps: false })
export class customizations
  extends Model<customizationsAttributes, customizationsAttributes>
  implements customizationsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('customizations_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'object_name', allowNull: true, type: DataType.STRING })
  objectName?: string;

  @Column({ field: 'api_name', allowNull: true, type: DataType.STRING })
  apiName?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
