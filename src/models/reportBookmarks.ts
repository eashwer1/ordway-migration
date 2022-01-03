import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface reportBookmarksAttributes {
  id?: number;
  userId?: number;
  reportName?: string;
  bookmarkId?: string;
  companyId?: number;
}

@Table({ tableName: 'report_bookmarks', timestamps: false })
export class reportBookmarks
  extends Model<reportBookmarksAttributes, reportBookmarksAttributes>
  implements reportBookmarksAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('report_bookmarks_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'user_id', allowNull: true, type: DataType.INTEGER })
  userId?: number;

  @Column({ field: 'report_name', allowNull: true, type: DataType.STRING(50) })
  reportName?: string;

  @Column({ field: 'bookmark_id', allowNull: true, type: DataType.STRING(50) })
  bookmarkId?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;
}
