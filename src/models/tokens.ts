import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface tokensAttributes {
  id?: number;
  tokenType?: string;
  tokenableId?: number;
  tokenableType?: string;
  tokenId?: string;
  tokenStatus?: string;
  tokenParams?: object;
  invalidationCause?: string;
  usedCount?: number;
  tokenUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
  companyId?: number;
  expiresTime?: Date;
  tokenBehavior?: string;
}

@Table({ tableName: 'tokens', timestamps: false })
export class tokens
  extends Model<tokensAttributes, tokensAttributes>
  implements tokensAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('tokens_id_seq'::regclass)"),
  })
  id?: number;

  @Column({ field: 'token_type', allowNull: true, type: DataType.STRING })
  tokenType?: string;

  @Column({ field: 'tokenable_id', allowNull: true, type: DataType.INTEGER })
  tokenableId?: number;

  @Column({ field: 'tokenable_type', allowNull: true, type: DataType.STRING })
  tokenableType?: string;

  @Column({ field: 'token_id', allowNull: true, type: DataType.STRING })
  tokenId?: string;

  @Column({ field: 'token_status', allowNull: true, type: DataType.STRING })
  tokenStatus?: string;

  @Column({
    field: 'token_params',
    allowNull: true,
    type: DataType.JSON,
    defaultValue: Sequelize.literal("'{}'::json"),
  })
  tokenParams?: object;

  @Column({
    field: 'invalidation_cause',
    allowNull: true,
    type: DataType.STRING,
  })
  invalidationCause?: string;

  @Column({ field: 'used_count', allowNull: true, type: DataType.INTEGER })
  usedCount?: number;

  @Column({ field: 'token_url', allowNull: true, type: DataType.STRING })
  tokenUrl?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'expires_time', allowNull: true, type: DataType.DATE(6) })
  expiresTime?: Date;

  @Column({ field: 'token_behavior', allowNull: true, type: DataType.STRING })
  tokenBehavior?: string;
}
