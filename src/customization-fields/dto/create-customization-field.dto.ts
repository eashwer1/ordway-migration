import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsObject, IsString } from 'class-validator';
import { IdDto } from '../../parents/abstract-dto';

export class CreateCustomizationFieldDto extends IdDto {
  @ApiProperty({
    title: 'Field Label',
    type: 'string',
  })
  @IsString()
  fieldLabel?: string;

  @ApiProperty({
    title: 'Api Name',
    type: 'string',
  })
  @IsString()
  apiName?: string;

  @ApiProperty({
    title: 'Description',
    type: 'string',
  })
  @IsString()
  description?: string;

  @ApiProperty({
    title: 'Tooltip Text',
    type: 'string',
  })
  @IsString()
  tooltipText?: string;

  @ApiProperty({
    title: 'Field Type',
    type: 'string',
  })
  @IsString()
  fieldType?: string;

  @ApiProperty({
    title: 'Default Value',
    type: 'string',
  })
  @IsString()
  defaultValue?: string;

  @ApiProperty({
    title: 'Options',
    type: 'Object',
  })
  @IsObject()
  options?: object;

  @ApiProperty({
    title: 'Uniq',
    type: 'boolean',
  })
  @IsBoolean()
  uniq?: boolean;

  @ApiProperty({
    title: 'Required',
    type: 'boolean',
  })
  @IsBoolean()
  required?: boolean;

  @ApiProperty({
    title: 'Display In UI',
    type: 'boolean',
  })
  @IsBoolean()
  displayInUi?: boolean;

  @ApiProperty({
    title: 'Customization Id',
    type: 'number',
  })
  @IsNumber()
  customizationId?: number;

  @ApiProperty({
    title: 'Display In Table',
    type: 'boolean',
  })
  @IsBoolean()
  displayInTable?: boolean;

  @ApiProperty({
    title: 'Use in Filters',
    type: 'boolean',
  })
  @IsBoolean()
  useInFilters?: boolean;
}
