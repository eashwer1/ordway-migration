import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString } from 'class-validator';
import { IdDto } from '../../parents/abstract-dto';

export class CreateAccountTypesDto extends IdDto {
  @ApiProperty({
    type: 'string',
    name: 'Account Type',
    description: 'Account type name',
    examples: ['Assets', 'Equity'],
  })
  @IsString()
  accountType: string;

  @ApiProperty({
    type: 'object',
    name: 'Subtypes',
    description: 'Array of sub types',
    example: ['Sales', 'Revenue', 'Other Income'],
  })
  @IsObject()
  subTypes: object;

  @ApiProperty({
    type: 'object',
    name: 'Custom fields',
  })
  @IsObject()
  customFields: object;
}
