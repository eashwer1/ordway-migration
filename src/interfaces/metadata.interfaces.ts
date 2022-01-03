export interface ConfigObjectFilter {
  [key: string]: string;
}

export interface ConfigFieldDefinition {
  object_name: string;
  attribute_name: string | string[];
  filter?: ConfigObjectFilter;
}

export interface ConfigField {
  name: string;
  display_name?: string;
  field_name?: string;
  definition: ConfigFieldDefinition;
}

export interface ConfigMetadatum {
  fields: ConfigField[];
  version: number;
}

export default interface ConfigMetadata {
  account_types?: ConfigMetadatum;
  billing_batches?: ConfigMetadatum;
  billing_periods?: ConfigMetadatum;
  chart_of_accounts?: ConfigMetadatum;
  company_profile?: ConfigMetadatum;
  currencies?: ConfigMetadatum;
  customers?: ConfigMetadatum;
  customizations?: ConfigMetadatum;
  finance?: ConfigMetadatum;
  invoice?: ConfigMetadatum;
  payment?: ConfigMetadatum;
  payment_terms?: ConfigMetadatum;
  quotes?: ConfigMetadatum;
  revenue_rules?: ConfigMetadatum;
  roles_permissions?: ConfigMetadatum;
  subscription?: ConfigMetadatum;
  system?: ConfigMetadatum;
  templates?: ConfigMetadatum;
  uom?: ConfigMetadatum;
}
