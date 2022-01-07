import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsObject, IsString } from 'class-validator';
import { IdDto } from 'src/parents/abstract-dto';

export class CreateBillingPeriodDto extends IdDto {
  @ApiProperty({
    type: 'string',
    title: 'Name',
  })
  @IsString()
  name?: string;

  @ApiProperty({
    type: 'number',
    title: 'Period Length',
  })
  @IsNumber()
  periodLength?: number;

  @ApiProperty({
    type: 'string',
    title: 'Period Unit',
  })
  @IsString()
  periodUnit?: string;

  @ApiProperty({
    type: 'boolean',
    title: 'Active',
  })
  @IsBoolean()
  active?: boolean;

  @ApiProperty({
    type: 'string',
    title: 'Period Type',
  })
  @IsString()
  periodType?: string;

  @ApiProperty({
    type: 'object',
    title: 'Contract Schedule',
  })
  @IsObject()
  contractSchedule?: object;
}
