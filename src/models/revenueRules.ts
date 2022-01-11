import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface revenueRulesAttributes {
  id?: number;
  ruleId?: string;
  name?: string;
  recognitionMethod?: string;
  postingDay?: number;
  recognitionTerm?: string;
  postingMethod?: string;
  status?: boolean;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  revenueRulesEntries?: object;
  numberOfPeriods?: number;
  recognitionSchedulePeriod?: number;
  customFields?: object;
  parentEntity?: number;
  recognitionType?: number;
  uuid?: string;
}

@Table({ tableName: 'revenue_rules', timestamps: false })
export class revenueRules
  extends Model<revenueRulesAttributes, revenueRulesAttributes>
  implements revenueRulesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('revenue_rules_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'rule_id', allowNull: true, type: DataType.STRING })
  ruleId?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({
    field: 'recognition_method',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal(
      "'straight-line-even-period'::character varying",
    ),
  })
  recognitionMethod?: string;

  @Column({
    field: 'posting_day',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("'-1'::integer"),
  })
  postingDay?: number;

  @Column({ field: 'recognition_term', allowNull: true, type: DataType.STRING })
  recognitionTerm?: string;

  @Column({
    field: 'posting_method',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'automatic'::character varying"),
  })
  postingMethod?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  status?: boolean;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'revenue_rules_entries',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'[]'::jsonb"),
  })
  revenueRulesEntries?: object;

  @Column({
    field: 'number_of_periods',
    allowNull: true,
    type: DataType.INTEGER,
  })
  numberOfPeriods?: number;

  @Column({
    field: 'recognition_schedule_period',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('1'),
  })
  recognitionSchedulePeriod?: number;

  @Column({
    field: 'custom_fields',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  customFields?: object;

  @Column({ field: 'parent_entity', allowNull: true, type: DataType.INTEGER })
  parentEntity?: number;

  @Column({
    field: 'recognition_type',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  recognitionType?: number;

  @Column({ allowNull: true, type: DataType.UUID })
  uuid?: string;
}
