import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsObject } from 'class-validator';
import { IdDto } from 'src/parents/abstract-dto';

export class CreateRuleDto extends IdDto {
  @ApiProperty({
    title: 'Interval',
    type: 'number',
  })
  @IsNumber()
  interval?: number;

  @ApiProperty({
    title: 'After Actions',
    type: 'Object',
  })
  @IsObject()
  afterActions?: object;

  @ApiProperty({
    title: 'Order',
    type: 'number',
  })
  @IsNumber()
  order?: number;

  @ApiProperty({
    title: 'Active',
    type: 'boolean',
  })
  @IsBoolean()
  active?: boolean;

  @ApiProperty({
    title: 'After Actions',
    type: 'Object',
  })
  @IsObject()
  condition?: object;

  @ApiProperty({
    title: 'Retry Rule Id',
    type: 'number',
  })
  @IsNumber()
  retryRuleId?: number;
}
