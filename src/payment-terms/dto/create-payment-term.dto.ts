import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { IdDto } from 'src/parents/abstract-dto';

export class CreatePaymentTermDto extends IdDto {
  @ApiProperty({
    title: 'Name',
    type: 'string',
  })
  @IsString()
  name?: string;

  @ApiProperty({
    title: 'Term Days',
    type: 'number',
  })
  @IsNumber()
  termDays?: number;

  @ApiProperty({
    title: 'Active',
    type: 'boolean',
  })
  @IsBoolean()
  active?: boolean;
}
