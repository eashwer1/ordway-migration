import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface rulesAttributes {
  id?: number;
  interval?: number;
  afterActions?: object;
  order?: number;
  active?: boolean;
  condition?: object;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  retryRuleId?: number;
  uuid?: string;
}

@Table({ tableName: 'rules', timestamps: false })
export class rules
  extends Model<rulesAttributes, rulesAttributes>
  implements rulesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('rules_id_seq'::regclass)"),
  })
  id?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  interval?: number;

  @Column({
    field: 'after_actions',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  afterActions?: object;

  @Column({ allowNull: true, type: DataType.INTEGER })
  order?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  active?: boolean;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  condition?: object;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'retry_rule_id', allowNull: true, type: DataType.INTEGER })
  retryRuleId?: number;

  @Column({ allowNull: true, type: DataType.UUID })
  uuid?: string;
}
