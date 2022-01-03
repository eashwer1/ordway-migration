import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface electronicPaymentsAttributes {
  id?: number;
  gateway?: string;
  companyId?: number;
  testEnabled?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  testSelectedCards?: object;
  testCcEnabled?: boolean;
  testAchEnabled?: boolean;
  testApiKey?: string;
  testRefreshApiKey?: string;
  testAccountId?: string;
  liveApiKey?: string;
  liveRefreshApiKey?: string;
  liveAccountId?: string;
  liveCcEnabled?: boolean;
  liveAchEnabled?: boolean;
  liveSelectedCards?: object;
  testApplicationId?: string;
  liveApplicationId?: string;
  autoPayTest?: boolean;
  receiveTestWebhooks?: boolean;
  receiveLiveWebhooks?: boolean;
  ccLimit?: string;
}

@Table({ tableName: 'electronic_payments', timestamps: false })
export class electronicPayments
  extends Model<electronicPaymentsAttributes, electronicPaymentsAttributes>
  implements electronicPaymentsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('electronic_payments_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  gateway?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({
    field: 'test_enabled',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  testEnabled?: boolean;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({
    field: 'test_selected_cards',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal(
      '\'{"jcb": "true", "amex": "true", "visa": "true", "discover": "true", "dinersclub": "true", "mastercard": "true"}\'::jsonb',
    ),
  })
  testSelectedCards?: object;

  @Column({
    field: 'test_cc_enabled',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  testCcEnabled?: boolean;

  @Column({
    field: 'test_ach_enabled',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  testAchEnabled?: boolean;

  @Column({ field: 'test_api_key', allowNull: true, type: DataType.STRING })
  testApiKey?: string;

  @Column({
    field: 'test_refresh_api_key',
    allowNull: true,
    type: DataType.STRING,
  })
  testRefreshApiKey?: string;

  @Column({ field: 'test_account_id', allowNull: true, type: DataType.STRING })
  testAccountId?: string;

  @Column({ field: 'live_api_key', allowNull: true, type: DataType.STRING })
  liveApiKey?: string;

  @Column({
    field: 'live_refresh_api_key',
    allowNull: true,
    type: DataType.STRING,
  })
  liveRefreshApiKey?: string;

  @Column({ field: 'live_account_id', allowNull: true, type: DataType.STRING })
  liveAccountId?: string;

  @Column({
    field: 'live_cc_enabled',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  liveCcEnabled?: boolean;

  @Column({
    field: 'live_ach_enabled',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  liveAchEnabled?: boolean;

  @Column({
    field: 'live_selected_cards',
    allowNull: true,
    type: DataType.JSONB,
    defaultValue: Sequelize.literal(
      '\'{"jcb": "true", "amex": "true", "visa": "true", "discover": "true", "dinersclub": "true", "mastercard": "true"}\'::jsonb',
    ),
  })
  liveSelectedCards?: object;

  @Column({
    field: 'test_application_id',
    allowNull: true,
    type: DataType.STRING,
  })
  testApplicationId?: string;

  @Column({
    field: 'live_application_id',
    allowNull: true,
    type: DataType.STRING,
  })
  liveApplicationId?: string;

  @Column({
    field: 'auto_pay_test',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('false'),
  })
  autoPayTest?: boolean;

  @Column({
    field: 'receive_test_webhooks',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  receiveTestWebhooks?: boolean;

  @Column({
    field: 'receive_live_webhooks',
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  receiveLiveWebhooks?: boolean;

  @Column({ field: 'cc_limit', allowNull: true, type: DataType.BIGINT })
  ccLimit?: string;
}
