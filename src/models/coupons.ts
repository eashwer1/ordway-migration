import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface couponsAttributes {
  id?: number;
  couponId?: string;
  code?: string;
  displayText?: string;
  status?: boolean;
  discountType?: string;
  discountValue?: number;
  durationPeriod?: number;
  discountCriteria?: string;
  trialType?: string;
  trialValue?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdById?: number;
  updatedById?: number;
  companyId?: number;
  criteriaValue?: string;
  expirationDate?: string;
  usageCount?: number;
  usageLimit?: number;
}

@Table({ tableName: 'coupons', timestamps: false })
export class coupons
  extends Model<couponsAttributes, couponsAttributes>
  implements couponsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('coupons_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'coupon_id', allowNull: true, type: DataType.STRING })
  couponId?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  code?: string;

  @Column({ field: 'display_text', allowNull: true, type: DataType.STRING })
  displayText?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  status?: boolean;

  @Column({
    field: 'discount_type',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'amount'::character varying"),
  })
  discountType?: string;

  @Column({ field: 'discount_value', allowNull: true, type: DataType.DOUBLE })
  discountValue?: number;

  @Column({ field: 'duration_period', allowNull: true, type: DataType.INTEGER })
  durationPeriod?: number;

  @Column({
    field: 'discount_criteria',
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("'product_and_plan'::character varying"),
  })
  discountCriteria?: string;

  @Column({ field: 'trial_type', allowNull: true, type: DataType.STRING })
  trialType?: string;

  @Column({ field: 'trial_value', allowNull: true, type: DataType.STRING })
  trialValue?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;

  @Column({ field: 'updated_by_id', allowNull: true, type: DataType.INTEGER })
  updatedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'criteria_value', allowNull: true, type: DataType.STRING })
  criteriaValue?: string;

  @Column({ field: 'expiration_date', allowNull: true, type: DataType.STRING })
  expirationDate?: string;

  @Column({
    field: 'usage_count',
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal('0'),
  })
  usageCount?: number;

  @Column({ field: 'usage_limit', allowNull: true, type: DataType.INTEGER })
  usageLimit?: number;
}
