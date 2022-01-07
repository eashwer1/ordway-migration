import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsObject, IsString } from 'class-validator';
import { IdDto } from 'src/parents/abstract-dto';

export class CreateTemplateDto extends IdDto {
  @ApiProperty({
    title: 'Name',
    type: 'String',
  })
  @IsString()
  name?: string;

  @ApiProperty({
    title: 'Template Id',
    type: 'String',
  })
  @IsString()
  templateId?: string;

  @ApiProperty({
    title: 'HTML',
    type: 'String',
  })
  @IsString()
  html?: string;

  @ApiProperty({
    title: 'Subject',
    type: 'String',
  })
  @IsString()
  subject?: string;

  @ApiProperty({
    title: 'From',
    type: 'String',
    example: 'abc@abc.com',
  })
  @IsString()
  from?: string;

  @ApiProperty({
    title: 'Recepients',
    type: 'String',
    example: 'abc@abc.com',
  })
  @IsString()
  recipients?: string;

  @ApiProperty({
    title: 'Bcc',
    type: 'String',
    example: 'abc@abc.com',
  })
  @IsString()
  bcc?: string;

  @ApiProperty({
    title: 'enabled',
    type: 'boolean',
  })
  @IsBoolean()
  enabled?: boolean;

  @ApiProperty({
    title: 'Send Pdf',
    type: 'boolean',
  })
  @IsBoolean()
  sendPdf?: boolean;

  @ApiProperty({
    title: 'Days Overdue',
    type: 'number',
  })
  @IsNumber()
  daysOverdue?: number;

  @ApiProperty({
    title: 'Description',
    type: 'String',
  })
  @IsString()
  description?: string;

  @ApiProperty({
    title: 'Template Type',
    type: 'String',
  })
  @IsString()
  templateType?: string;

  @ApiProperty({
    title: 'Boolean Option',
    type: 'boolean',
  })
  @IsBoolean()
  booleanOption?: boolean;

  @ApiProperty({
    title: 'Source',
    type: 'boolean',
  })
  @IsBoolean()
  source?: boolean;

  @ApiProperty({
    title: 'Only Already Emailed',
    type: 'boolean',
  })
  @IsBoolean()
  onlyAlreadyEmailed?: boolean;

  @ApiProperty({
    title: 'Filter Options',
    type: 'Object',
  })
  @IsObject()
  filterOptions?: object;

  @ApiProperty({
    title: 'Template Format',
    type: 'String',
  })
  @IsString()
  templateFormat?: string;

  @ApiProperty({
    title: 'Pdf Html',
    type: 'String',
  })
  @IsString()
  pdfHtml?: string;

  @ApiProperty({
    title: 'cc',
    type: 'String',
    example: 'abc@abc.com',
  })
  cc?: string;

  @ApiProperty({
    title: 'Template Objects',
    type: 'Object',
  })
  @IsObject()
  templateObjects?: object;
}
