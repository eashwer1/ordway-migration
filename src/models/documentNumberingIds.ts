import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface documentNumberingIdsAttributes {
  id?: number;
  rule?: string;
  prefix?: string;
  document?: string;
  nextNumber?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'document_numbering_ids', timestamps: false })
export class documentNumberingIds
  extends Model<documentNumberingIdsAttributes, documentNumberingIdsAttributes>
  implements documentNumberingIdsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('document_numbering_ids_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  rule?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  prefix?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  document?: string;

  @Column({ field: 'next_number', allowNull: true, type: DataType.INTEGER })
  nextNumber?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
