import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface templatesAttributes {
  id?: number;
  name?: string;
  templateId?: string;
  html?: string;
  subject?: string;
  from?: string;
  recipients?: string;
  bcc?: string;
  enabled?: boolean;
  sendPdf?: boolean;
  daysOverdue?: number;
  description?: string;
  templateType?: string;
  companyId?: number;
  createdById?: number;
  updatedById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  booleanOption?: boolean;
  source?: boolean;
  onlyAlreadyEmailed?: boolean;
  filterOptions?: object;
  templateFormat?: string;
  pdfHtml?: string;
  cc?: string;
  templateObjects?: object;
}

@Table({ tableName: 'templates', timestamps: false })
export class templates
  extends Model<templatesAttributes, templatesAttributes>
  implements templatesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('templates_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({ field: 'template_id', allowNull: true, type: DataType.STRING })
  templateId?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  html?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  subject?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  from?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  recipients?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  bcc?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  enabled?: boolean;

  @Column({
    field: 'send_pdf',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  sendPdf?: boolean;

  @Column({
    field: 'days_overdue',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  daysOverdue?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({ field: 'template_type', allowNull: true, type: DataType.STRING })
  templateType?: string;

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

  @Column({ field: 'boolean_option', allowNull: true, type: DataType.BOOLEAN })
  booleanOption?: boolean;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  source?: boolean;

  @Column({
    field: 'only_already_emailed',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  onlyAlreadyEmailed?: boolean;

  @Column({ field: 'filter_options', allowNull: true, type: DataType.JSONB })
  filterOptions?: object;

  @Column({ field: 'template_format', allowNull: true, type: DataType.STRING })
  templateFormat?: string;

  @Column({ field: 'pdf_html', allowNull: true, type: DataType.STRING })
  pdfHtml?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  cc?: string;

  @Column({
    field: 'template_objects',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  templateObjects?: object;
}
