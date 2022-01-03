import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';

export class CreateAccountTypesDto {
  @ApiProperty({ type: 'number', name: 'Id' })
  @IsNumber()
  id: number;

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
