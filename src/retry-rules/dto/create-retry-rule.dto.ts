import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject } from 'class-validator';
import { IdDto } from 'src/parents/abstract-dto';

export class CreateRetryRuleDto extends IdDto {
  @ApiProperty({
    title: 'After Actions',
    type: 'Object',
  })
  @IsObject()
  afterActions?: object;

  @ApiProperty({
    title: 'Retry Schedule Id',
    type: 'number',
  })
  @IsNumber()
  retryScheduleId?: number;
}
