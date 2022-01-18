import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString } from 'class-validator';
import { IdDto } from '../../parents/abstract-dto';

export class CreateDropdownTaxonomyDto extends IdDto {
  @ApiProperty({
    title: 'Category Type',
    type: 'string',
  })
  @IsString()
  categoryType?: string;

  @ApiProperty({
    title: 'Category Type',
    type: 'Object',
  })
  @IsObject()
  taxonomy?: object;

  @ApiProperty({
    title: 'Sub Type',
    type: 'string',
  })
  @IsString()
  subType?: string;
}
