import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface billingBatchesAttributes {
  id?: number;
  batch?: string;
  companyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  templateId?: number;
}

@Table({ tableName: 'billing_batches', timestamps: false })
export class billingBatches
  extends Model<billingBatchesAttributes, billingBatchesAttributes>
  implements billingBatchesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('billing_batches_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  batch?: string;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'template_id', allowNull: true, type: DataType.INTEGER })
  templateId?: number;
}
