import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { IdDto } from 'src/parents/abstract-dto';

export class CreateAuditLogDto extends IdDto {
  @ApiProperty({
    type: 'string',
    description: 'Action name',
    examples: ['Create', 'Update', 'Delete'],
  })
  @IsString()
  action?: string;

  @ApiProperty({
    type: 'string',
    description: 'Source name',
    examples: ['name'],
  })
  @IsString()
  source?: string;

  @ApiProperty({
    type: 'string',
    description: 'IP address',
    example: '000.000.000.000',
  })
  @IsString()
  ipAddress?: string;

  @ApiProperty({
    type: 'Object',
    description: 'Object',
    examples: ['name'],
  })
  @IsString()
  object?: object;

  @ApiProperty({
    type: 'string',
    name: 'Auditable Class Name',
    description: 'Ordway object name to be audited',
    examples: ['Currencies'],
  })
  @IsString()
  auditableClassName?: string;

  @ApiProperty({
    type: 'string',
    name: 'Auditable table show id',
    description: 'Ordway object nto be shown on ui',
    examples: ['asa'],
  })
  @IsString()
  auditableShowId?: string;
}
