import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface statementsAttributes {
  id?: number;
  statementId?: string;
  statementDate?: string;
  startDate?: string;
  endDate?: string;
  deliverByEmail?: boolean;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  companyId?: number;
  templateId?: number;
  customerId?: number;
  pdfFileName?: string;
  pdfContentType?: string;
  pdfFileSize?: number;
  pdfUpdatedAt?: Date;
}

@Table({ tableName: 'statements', timestamps: false })
export class statements
  extends Model<statementsAttributes, statementsAttributes>
  implements statementsAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('statements_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'statement_id', allowNull: true, type: DataType.STRING })
  statementId?: string;

  @Column({ field: 'statement_date', allowNull: true, type: DataType.STRING })
  statementDate?: string;

  @Column({ field: 'start_date', allowNull: true, type: DataType.STRING })
  startDate?: string;

  @Column({ field: 'end_date', allowNull: true, type: DataType.STRING })
  endDate?: string;

  @Column({
    field: 'deliver_by_email',
    allowNull: true,
    type: DataType.BOOLEAN,
  })
  deliverByEmail?: boolean;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'template_id', allowNull: true, type: DataType.INTEGER })
  templateId?: number;

  @Column({ field: 'customer_id', allowNull: true, type: DataType.INTEGER })
  customerId?: number;

  @Column({ field: 'pdf_file_name', allowNull: true, type: DataType.STRING })
  pdfFileName?: string;

  @Column({ field: 'pdf_content_type', allowNull: true, type: DataType.STRING })
  pdfContentType?: string;

  @Column({ field: 'pdf_file_size', allowNull: true, type: DataType.INTEGER })
  pdfFileSize?: number;

  @Column({ field: 'pdf_updated_at', allowNull: true, type: DataType.DATE(6) })
  pdfUpdatedAt?: Date;
}
