import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsObject, IsString } from 'class-validator';
import { IdDto } from 'src/parents/abstract-dto';

export class CreateRetryScheduleDto extends IdDto {
  @ApiProperty({
    title: 'Active',
    type: 'boolean',
  })
  @IsBoolean()
  active?: boolean;

  @ApiProperty({
    title: 'Filters',
    type: 'Object',
  })
  @IsObject()
  filters?: object;

  @ApiProperty({
    title: 'Retry type',
    type: 'String',
  })
  @IsString()
  retryType?: string;
}
