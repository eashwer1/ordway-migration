import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface alembicVersionAttributes {
  versionNum: string;
}

@Table({ tableName: 'alembic_version', timestamps: false })
export class alembicVersion
  extends Model<alembicVersionAttributes, alembicVersionAttributes>
  implements alembicVersionAttributes
{
  @Column({ field: 'version_num', primaryKey: true, type: DataType.STRING(32) })
  versionNum!: string;
}
