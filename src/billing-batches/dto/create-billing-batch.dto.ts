import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { IdDto } from 'src/parents/abstract-dto';

export class CreateBillingBatchDto extends IdDto {
  @ApiProperty({
    type: 'string',
    description: 'Batch name',
    examples: ['name'],
  })
  @IsString()
  batch: string;

  @ApiProperty({
    type: 'object',
    description: 'Template for the batch execution',
    example: [1],
  })
  @IsNumber()
  templateId: number;
}
