import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface schemaMigrationsAttributes {
  version?: string;
}

@Table({ tableName: 'schema_migrations', timestamps: false })
export class schemaMigrations
  extends Model<schemaMigrationsAttributes, schemaMigrationsAttributes>
  implements schemaMigrationsAttributes
{
  @Column({ allowNull: true, type: DataType.STRING })
  version?: string;
}
