import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';
import { IdDto } from 'src/parents/abstract-dto';

export class CreateChartOfAccountDto extends IdDto {
  @ApiProperty({
    title: 'Account Type Id',
    type: 'number',
  })
  @IsNumber()
  accountTypeId?: number;

  @ApiProperty({
    type: 'string',
    title: 'Code',
  })
  @IsString()
  code?: string;

  @ApiProperty({
    type: 'string',
    title: 'Name',
  })
  @IsString()
  name?: string;

  @ApiProperty({
    type: 'string',
    title: 'Account Sub Type',
  })
  @IsString()
  accountSubType?: string;

  @ApiProperty({
    type: 'string',
    title: 'Description',
  })
  @IsString()
  description?: string;

  @ApiProperty({
    type: 'number',
    title: 'Balance',
  })
  @IsNumber()
  balance?: number;

  @ApiProperty({
    type: 'number',
    title: 'Status',
  })
  @IsNumber()
  status?: boolean;

  @ApiProperty({
    type: 'number',
    title: 'Custom Fields',
  })
  @IsObject()
  customFields?: object;
}
