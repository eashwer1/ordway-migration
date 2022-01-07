import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IdDto } from 'src/parents/abstract-dto';

export class CreateCustomizationDto extends IdDto {
  @ApiProperty({
    title: 'Object Name',
    type: 'string',
  })
  @IsString()
  objectName?: string;

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
}
