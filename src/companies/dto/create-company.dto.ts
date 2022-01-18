import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';
import { IdDto } from '../../parents/abstract-dto';

export class CreateCompanyDto extends IdDto {
  @ApiProperty({
    title: 'Name',
    type: 'string',
  })
  @IsString()
  name?: string;

  @ApiProperty({
    title: 'Status',
    type: 'string',
  })
  @IsString()
  status?: string;

  @ApiProperty({
    title: 'Product Pricing',
    type: 'object',
  })
  @IsObject()
  productPricing?: object;

  @ApiProperty({
    title: 'Timezone',
    type: 'string',
  })
  @IsString()
  timezone?: string;

  @ApiProperty({
    title: 'Phone',
    type: 'string',
  })
  @IsString()
  phone?: string;

  @ApiProperty({
    title: 'Email',
    type: 'string',
    example: 'abc@abc.com',
  })
  @IsString()
  email?: string;

  @ApiProperty({
    title: 'Address 1',
    type: 'string',
  })
  @IsString()
  address1?: string;

  @ApiProperty({
    title: 'Address 2',
    type: 'string',
  })
  @IsString()
  address2?: string;

  @ApiProperty({
    title: 'City',
    type: 'string',
  })
  @IsString()
  city?: string;

  @ApiProperty({
    title: 'State',
    type: 'string',
  })
  @IsString()
  state?: string;

  @ApiProperty({
    title: 'Zip',
    type: 'string',
  })
  @IsString()
  zip?: string;

  @ApiProperty({
    title: 'Country',
    type: 'string',
  })
  @IsString()
  country?: string;

  @ApiProperty({
    title: 'Logo File Name',
    type: 'string',
  })
  @IsString()
  logoFileName?: string;

  @ApiProperty({
    title: 'Logo Content Type',
    type: 'string',
  })
  @IsString()
  logoContentType?: string;

  @ApiProperty({
    title: 'Logo File Size',
    type: 'number',
  })
  @IsNumber()
  logoFileSize?: number;

  @ApiProperty({
    title: 'Logo Updated At',
    type: 'Date',
  })
  @IsDate()
  logoUpdatedAt?: Date;

  @ApiProperty({
    title: 'Default GL Accounts',
    type: 'Object',
  })
  @IsObject()
  defaultGlAccounts?: object;

  @ApiProperty({
    title: 'Reports',
    type: 'boolean',
  })
  @IsBoolean()
  reports?: boolean;

  @ApiProperty({
    title: 'Enable Reports Dashboard',
    type: 'boolean',
  })
  @IsBoolean()
  enableReportsDashboard?: boolean;

  @ApiProperty({
    title: 'Terms and Conditions Url',
    type: 'string',
  })
  @IsString()
  termsAndConditionsUrl?: string;

  @ApiProperty({
    title: 'Privacy Policy Url',
    type: 'string',
  })
  @IsString()
  privacyPolicyUrl?: string;

  @ApiProperty({
    title: 'Display Terms and Privacy',
    type: 'boolean',
  })
  @IsBoolean()
  displayTermsAndPrivacy?: boolean;

  @ApiProperty({
    title: 'Hosted Pages Sub Url',
    type: 'string',
  })
  @IsString()
  hostedPagesSubUrl?: string;

  @ApiProperty({
    title: 'Finance Settings',
    type: 'Object',
  })
  @IsObject()
  finance?: object;

  @ApiProperty({
    title: 'Api Gateway',
    type: 'string',
  })
  @IsString()
  apiGateway?: string;

  @ApiProperty({
    title: 'Ancestry',
    type: 'string',
  })
  @IsString()
  ancestry?: string;

  @ApiProperty({
    title: 'Type',
    type: 'string',
  })
  @IsString()
  type?: string;

  @ApiProperty({
    title: 'Domain',
    type: 'string',
  })
  @IsString()
  domain?: string;
}
