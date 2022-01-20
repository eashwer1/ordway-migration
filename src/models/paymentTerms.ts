import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface paymentTermsAttributes {
  id?: number;
  name?: string;
  termDays?: number;
  active?: boolean;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  uuid?: string;
  termType?: number;
  description?: string;
  earlyPayConfig?: object;
  latePayConfig?: object;
}

@Table({ tableName: 'payment_terms', timestamps: false })
export class paymentTerms
  extends Model<paymentTermsAttributes, paymentTermsAttributes>
  implements paymentTermsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('payment_terms_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({
    field: 'term_days',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  termDays?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  active?: boolean;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ allowNull: true, type: DataType.UUID })
  uuid?: string;

  @Column({
    field: 'term_type',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  termType?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;

  @Column({
    field: 'early_pay_config',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  earlyPayConfig?: object;

  @Column({
    field: 'late_pay_config',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal("'{}'::jsonb"),
  })
  latePayConfig?: object;
}
