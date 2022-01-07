import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export abstract class IdDto {
  @ApiProperty({
    name: 'id',
    type: 'number',
    example: 2,
  })
  @IsNumber()
  id?: number;
}
