import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested, IsString } from 'class-validator';
import {
  ConfigField,
  ConfigMetadatum,
} from 'src/interfaces/metadata.interfaces';

export class ConfigMetadatumDto {
  @ValidateNested({ each: true })
  @ApiProperty()
  @Type(() => ConfigFieldDto)
  fields: ConfigField[];

  constructor(fields) {
    this.fields = fields;
  }
}

export class ConfigFieldDto {
  @IsString()
  @ApiProperty()
  name: string;

  constructor(name) {
    this.name = name;
  }
}

export class CreateImportDto {
  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public account_types?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public billing_batches?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public billing_periods?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public chart_of_accounts?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public company_profile?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public currencies?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public customers?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public customizations?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public finance?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public invoice?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public payment?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public payment_terms?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public quotes?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public revenue_rules?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public roles_permissions?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public subscription?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public system?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public templates?: ConfigMetadatum;

  @ValidateNested()
  @ApiProperty()
  @Type(() => ConfigMetadatumDto)
  public uom?: ConfigMetadatum;
}
