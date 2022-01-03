import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

interface invitesAttributes {
  id?: number;
  email?: string;
  invitationToken?: string;
  usedAt?: string;
  createdAt?: Date;
  updatedAt?: Date;
  invitedById?: number;
  companyId?: number;
  roleId?: number;
  name?: string;
  active?: boolean;
  expiresAt?: Date;
}

@Table({ tableName: 'invites', timestamps: false })
export class invites
  extends Model<invitesAttributes, invitesAttributes>
  implements invitesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('invites_id_seq'::regclass)"),
  })
  id?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("''::character varying"),
  })
  email?: string;

  @Column({ field: 'invitation_token', allowNull: true, type: DataType.STRING })
  invitationToken?: string;

  @Column({ field: 'used_at', allowNull: true, type: DataType.STRING })
  usedAt?: string;

  @Column({ field: 'created_at', allowNull: true, type: DataType.DATE(6) })
  createdAt?: Date;

  @Column({ field: 'updated_at', allowNull: true, type: DataType.DATE(6) })
  updatedAt?: Date;

  @Column({ field: 'invited_by_id', allowNull: true, type: DataType.INTEGER })
  invitedById?: number;

  @Column({ field: 'company_id', allowNull: true, type: DataType.INTEGER })
  companyId?: number;

  @Column({ field: 'role_id', allowNull: true, type: DataType.INTEGER })
  roleId?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal('true'),
  })
  active?: boolean;

  @Column({ field: 'expires_at', allowNull: true, type: DataType.DATE(6) })
  expiresAt?: Date;
}
