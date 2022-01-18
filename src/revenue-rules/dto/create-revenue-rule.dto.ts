import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsObject, IsString } from 'class-validator';
import { IdDto } from '../../parents/abstract-dto';

export class CreateRevenueRuleDto extends IdDto {
  @ApiProperty({
    title: 'Rule Id',
    type: 'String',
  })
  @IsString()
  ruleId?: string;

  @ApiProperty({
    title: 'Name',
    type: 'String',
  })
  @IsString()
  name?: string;

  @ApiProperty({
    title: 'Recognition Method',
    type: 'String',
  })
  @IsString()
  recognitionMethod?: string;

  @ApiProperty({
    title: 'Recognition Method',
    type: 'Number',
  })
  @IsNumber()
  postingDay?: number;

  @ApiProperty({
    title: 'Recognition Term',
    type: 'String',
  })
  @IsString()
  recognitionTerm?: string;

  @ApiProperty({
    title: 'Posting Method',
    type: 'String',
  })
  @IsString()
  postingMethod?: string;

  @ApiProperty({
    title: 'Status',
    type: 'boolean',
  })
  @IsBoolean()
  status?: boolean;

  @ApiProperty({
    title: 'Revenue Rules Entries',
    type: 'object',
  })
  @IsObject()
  revenueRulesEntries?: object;

  @ApiProperty({
    title: 'Number Of Periods',
    type: 'Number',
  })
  @IsNumber()
  numberOfPeriods?: number;

  @ApiProperty({
    title: 'Recognition Schedule Period',
    type: 'Number',
  })
  @IsNumber()
  recognitionSchedulePeriod?: number;

  @ApiProperty({
    title: 'Custom Fields',
    type: 'object',
  })
  @IsObject()
  customFields?: object;

  @ApiProperty({
    title: 'Parent Entity',
    type: 'Number',
  })
  @IsNumber()
  parentEntity?: number;
}
