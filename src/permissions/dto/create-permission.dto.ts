import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';
import { IdDto } from '../../parents/abstract-dto';

export class CreatePermissionDto extends IdDto {
  @ApiProperty({
    title: 'Role Id',
    type: 'number',
  })
  @IsNumber()
  roleId?: number;

  @ApiProperty({
    title: 'Module',
    type: 'string',
  })
  @IsString()
  module?: string;

  @ApiProperty({
    title: 'Activity',
    type: 'string',
  })
  @IsString()
  activity?: string;

  @ApiProperty({
    title: 'Permissions',
    type: 'Object',
  })
  @IsObject()
  permissions?: object;
}
