import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface integrationEventsAttributes {
  id?: number;
  companyId?: number;
  sourceId?: string;
  instanceName?: string;
  eventName?: string;
  action?: string;
  sourceObj?: object;
  createdAt?: Date;
  createdById?: number;
}

@Table({ tableName: 'integration_events', timestamps: false })
export class integrationEvents
  extends Model<integrationEventsAttributes, integrationEventsAttributes>
  implements integrationEventsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('integration_events_id_seq'::regclass)",
    ),
  })
  id?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'source_id', allowNull: true, type: DataType.STRING })
  sourceId?: string;

  @Column({ field: 'instance_name', allowNull: true, type: DataType.STRING })
  instanceName?: string;

  @Column({ field: 'event_name', allowNull: true, type: DataType.STRING })
  eventName?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  action?: string;

  @Column({ field: 'source_obj', allowNull: true, type: DataType.JSONB })
  sourceObj?: object;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'created_by_id', allowNull: true, type: DataType.INTEGER })
  createdById?: number;
}
