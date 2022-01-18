import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { IdDto } from '../../parents/abstract-dto';

export class CreateCurrencyDto extends IdDto {
  @ApiProperty({
    title: 'Currency Code',
    type: 'string',
  })
  @IsString()
  currencyCode?: string;

  @ApiProperty({
    title: 'Currency Name',
    type: 'string',
  })
  @IsString()
  currencyName?: string;

  @ApiProperty({
    title: 'Conversion Rate',
    type: 'number',
  })
  @IsNumber()
  conversionRate?: number;

  @ApiProperty({
    title: 'Base Currency',
    type: 'string',
  })
  @IsBoolean()
  baseCurrency?: boolean;

  @ApiProperty({
    title: 'Status',
    type: 'boolean',
  })
  @IsBoolean()
  status?: boolean;

  @ApiProperty({
    title: 'Effective Date',
    type: 'string',
  })
  @IsString()
  effectiveDate?: string;

  @ApiProperty({
    title: 'System',
    type: 'boolean',
  })
  @IsBoolean()
  system?: boolean;

  @ApiProperty({
    title: 'Cron Target Date',
    type: 'string',
  })
  @IsString()
  cronTargetDate?: string;

  @ApiProperty({
    title: 'Precision',
    type: 'number',
  })
  @IsNumber()
  precision?: number;
}
