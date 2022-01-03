import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface analyticsTokensAttributes {
  id?: number;
  accessToken?: string;
  expiresIn?: number;
  createdAt?: Date;
}

@Table({ tableName: 'analytics_tokens', timestamps: false })
export class analyticsTokens
  extends Model<analyticsTokensAttributes, analyticsTokensAttributes>
  implements analyticsTokensAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('analytics_tokens_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({
    field: 'access_token',
    allowNull: true,
    type: DataType.STRING(255),
  })
  accessToken?: string;

  @Column({ field: 'expires_in', allowNull: true, type: DataType.INTEGER })
  expiresIn?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;
}
