import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface retryRulesAttributes {
  id?: number;
  afterActions?: object;
  companyId?: number;
  retryScheduleId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ tableName: 'retry_rules', timestamps: false })
export class retryRules
  extends Model<retryRulesAttributes, retryRulesAttributes>
  implements retryRulesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('retry_rules_id_seq'::regclass)"),
  })
  id?: number;

  @Column({
    field: 'after_actions',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  afterActions?: object;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'retry_schedule_id',
    allowNull: true,
    type: DataType.INTEGER,
  })
  retryScheduleId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;
}
