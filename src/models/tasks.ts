import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface tasksAttributes {
  taskId?: number;
  applicationId?: string;
  taskName?: string;
  customColumn1?: string;
  customColumn2?: string;
  isDisabled?: string;
  scheduleXml?: string;
  processXml?: string;
  timeCreated?: Date;
  timeModified?: Date;
  timeLastRun?: Date;
  timeNextRun?: Date;
  wasSuccessfulLastRun?: string;
  taskResults?: string;
  runAs?: string;
  isRunning?: string;
  timeRunning?: Date;
}

@Table({ tableName: 'tasks', timestamps: false })
export class tasks
  extends Model<tasksAttributes, tasksAttributes>
  implements tasksAttributes
{
  @Column({
    field: 'TaskID',
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      'nextval(\'"tasks_TaskID_seq"\'::regclass)',
    ),
  })
  taskId?: number;

  @Column({
    field: 'ApplicationID',
    allowNull: true,
    type: DataType.STRING(50),
    defaultValue: Sequelize.literal('NULL::character varying'),
  })
  applicationId?: string;

  @Column({
    field: 'TaskName',
    allowNull: true,
    type: DataType.STRING(50),
    defaultValue: Sequelize.literal('NULL::character varying'),
  })
  taskName?: string;

  @Column({
    field: 'CustomColumn1',
    allowNull: true,
    type: DataType.STRING(4000),
    defaultValue: Sequelize.literal('NULL::character varying'),
  })
  customColumn1?: string;

  @Column({
    field: 'CustomColumn2',
    allowNull: true,
    type: DataType.STRING(4000),
    defaultValue: Sequelize.literal('NULL::character varying'),
  })
  customColumn2?: string;

  @Column({
    field: 'IsDisabled',
    allowNull: true,
    type: DataType.STRING(1),
    defaultValue: Sequelize.literal('NULL::bpchar'),
  })
  isDisabled?: string;

  @Column({
    field: 'ScheduleXml',
    allowNull: true,
    type: DataType.STRING(4000),
    defaultValue: Sequelize.literal('NULL::character varying'),
  })
  scheduleXml?: string;

  @Column({
    field: 'ProcessXml',
    allowNull: true,
    type: DataType.STRING(4000),
    defaultValue: Sequelize.literal('NULL::character varying'),
  })
  processXml?: string;

  @Column({ field: 'TimeCreated', allowNull: true, type: DataType.DATE })
  timeCreated?: Date;

  @Column({ field: 'TimeModified', allowNull: true, type: DataType.DATE })
  timeModified?: Date;

  @Column({ field: 'TimeLastRun', allowNull: true, type: DataType.DATE })
  timeLastRun?: Date;

  @Column({ field: 'TimeNextRun', allowNull: true, type: DataType.DATE })
  timeNextRun?: Date;

  @Column({
    field: 'WasSuccessfulLastRun',
    allowNull: true,
    type: DataType.STRING(1),
    defaultValue: Sequelize.literal('NULL::bpchar'),
  })
  wasSuccessfulLastRun?: string;

  @Column({
    field: 'TaskResults',
    allowNull: true,
    type: DataType.STRING(1000),
    defaultValue: Sequelize.literal('NULL::character varying'),
  })
  taskResults?: string;

  @Column({
    field: 'RunAs',
    allowNull: true,
    type: DataType.STRING(50),
    defaultValue: Sequelize.literal('NULL::character varying'),
  })
  runAs?: string;

  @Column({
    field: 'IsRunning',
    allowNull: true,
    type: DataType.STRING(1),
    defaultValue: Sequelize.literal('NULL::bpchar'),
  })
  isRunning?: string;

  @Column({ field: 'TimeRunning', allowNull: true, type: DataType.DATE })
  timeRunning?: Date;
}
