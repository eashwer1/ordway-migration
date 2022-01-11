import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsUUID } from 'class-validator';

export abstract class IdDto {
  @ApiProperty({
    name: 'id',
    type: 'number',
    example: 2,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    name: 'uuid',
    type: 'uuid',
  })
  @IsUUID()
  uuid?: string;
}
