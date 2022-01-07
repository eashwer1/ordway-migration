import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';
import { IdDto } from 'src/parents/abstract-dto';

export class CreateCustomizationFormulaDto extends IdDto {
  @ApiProperty({
    title: 'Formula',
    type: 'Object',
  })
  @IsObject()
  formula?: object;

  @ApiProperty({
    title: 'Advanced Options',
    type: 'Object',
  })
  @IsObject()
  advancedOptions?: object;

  @ApiProperty({
    title: 'Field Return Type',
    type: 'string',
  })
  @IsString()
  fieldReturnType?: string;

  @ApiProperty({
    title: 'Customization Field Id ',
    type: 'number',
  })
  @IsNumber()
  customizationFieldId?: number;
}
