import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IdDto } from '../../parents/abstract-dto';

export class CreateRoleDto extends IdDto {
  @ApiProperty({
    title: 'Name',
    type: 'String',
  })
  @IsString()
  name?: string;

  @ApiProperty({
    title: 'Description',
    type: 'String',
  })
  @IsString()
  description?: string;
}
