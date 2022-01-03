import { flatten, Injectable } from '@nestjs/common';
import { isArray } from 'class-validator';
import { mapValues, values, find, findKey, pick } from 'lodash';
import * as pluralize from 'pluralize';
import { AccountTypesService } from 'src/account-types/account-types.service';
import { BillingBatchesService } from 'src/billing-batches/billing-batches.service';
import { BillingPeriodsService } from 'src/billing-periods/billing-periods.service';
import { ChartOfAccountsService } from 'src/chart-of-accounts/chart-of-accounts.service';
import { CompaniesService } from 'src/companies/companies.service';
import { CurrenciesService } from 'src/currencies/currencies.service';
import { CustomizationFieldsService } from 'src/customization-fields/customization-fields.service';
import { CustomizationFormulasService } from 'src/customization-formulas/customization-formulas.service';
import { CustomizationsService } from 'src/customizations/customizations.service';
import { User } from 'src/decorators/user.decorator';
import { DropdownTaxonomiesService } from 'src/dropdown-taxonomies/dropdown-taxonomies.service';

import ConfigMetadata, {
  ConfigField,
} from 'src/interfaces/metadata.interfaces';
import { companies, users } from 'src/models';
import { PaymentTermsService } from 'src/payment-terms/payment-terms.service';
import { PermissionsService } from 'src/permissions/permissions.service';
import { RetryRulesService } from 'src/retry-rules/retry-rules.service';
import { RetrySchedulesService } from 'src/retry-schedules/retry-schedules.service';
import { RevenueRulesService } from 'src/revenue-rules/revenue-rules.service';
import { RolesService } from 'src/roles/roles.service';
import { RulesService } from 'src/rules/rules.service';
import { TemplatesService } from 'src/templates/templates.service';
import { getAllMetadataFields } from 'src/utils/metadata/read-metadata';

@Injectable()
export class ExportsService {
  constructor(
    private accountTypesService: AccountTypesService,
    private billingBatchesService: BillingBatchesService,
    private billingPeriodsService: BillingPeriodsService,
    private chartOfAccountsService: ChartOfAccountsService,
    private companiesService: CompaniesService,
    private currenciesService: CurrenciesService,
    private customizationFieldsService: CustomizationFieldsService,
    private customizationFormulasService: CustomizationFormulasService,
    private customizationsService: CustomizationsService,
    private dropdownTaxonomiesService: DropdownTaxonomiesService,
    private paymentTermsService: PaymentTermsService,
    private permissionsService: PermissionsService,
    private retryRulesService: RetryRulesService,
    private retrySchedulesService: RetrySchedulesService,
    private revenueRulesService: RevenueRulesService,
    private rolesService: RolesService,
    private rulesService: RulesService,
    private templatesService: TemplatesService,
  ) {}

  public async getConfigForExport(
    requestedObject: ConfigMetadata,
    user: users,
    company: companies,
  ): Promise<any> {
    const allowedFields = await getAllMetadataFields(user, company);
    const allFields = mapValues(requestedObject, 'fields');
    const requestedFields = flatten(values(allFields));

    const objectAttributes = this.getObjectWithRequiredAttributes(
      requestedFields,
      allowedFields,
    );

    const servicePromises = [];
    Object.keys(objectAttributes).forEach((objectName) => {
      const attributes: string[] = Array.from(
        new Set(objectAttributes[objectName]),
      );
      const retrieveDataService = this.mapObjectToService(
        objectName,
        company,
        attributes,
      );
      if (retrieveDataService) {
        servicePromises.push(retrieveDataService);
      }
    });

    const resultedData = await Promise.all(servicePromises);

    const reduceToObject = (previous, current, currentIndex) => {
      previous = { ...previous, [current]: resultedData[currentIndex] };
      return previous;
    };

    const objectWithData = Object.keys(objectAttributes).reduce(
      reduceToObject,
      {},
    );

    return this.getDataRequestedFormat(
      objectWithData,
      requestedFields,
      allowedFields,
      allFields,
    );
  }

  private async mapObjectToService(
    objectName: string,
    company: companies,
    attributes: string[],
  ): Promise<any> {
    const tableName = pluralize.plural(objectName);
    switch (tableName) {
      case 'account_types':
        return await this.accountTypesService.findByAttributes(
          company,
          attributes,
        );
      case 'billing_batches':
        return this.billingBatchesService.findByAttributes(company, attributes);
      case 'billing_periods':
        return this.billingPeriodsService.findByAttributes(company, attributes);
      case 'chart_of_accounts':
        return this.chartOfAccountsService.findByAttributes(
          company,
          attributes,
        );
      case 'companies':
        return this.companiesService.findCompanies(company.id, attributes);
      case 'currencies':
        return this.currenciesService.findByAttributes(company, attributes);
      case 'customization_fields':
        return this.customizationFieldsService.findByAttributes(
          company,
          attributes,
        );
      case 'customization_formulas':
        return this.customizationFormulasService.findByAttributes(
          company,
          attributes,
        );
      case 'customizations':
        return this.customizationsService.findByAttributes(company, attributes);
      case 'dropdown_taxonomies':
        return this.dropdownTaxonomiesService.findByAttributes(
          company,
          attributes,
        );
      case 'payment_terms':
        return this.paymentTermsService.findByAttributes(company, attributes);
      case 'permissions':
        return this.permissionsService.findByAttributes(company, attributes);
      case 'retry_rules':
        return this.retryRulesService.findByAttributes(company, attributes);
      case 'retry_schedules':
        return this.retrySchedulesService.findByAttributes(company, attributes);
      case 'revenue_rules':
        return this.revenueRulesService.findByAttributes(company, attributes);
      case 'roles':
        return this.rolesService.findByAttributes(company, attributes);
      case 'rules':
        return this.rulesService.findByAttributes(company, attributes);
      case 'templates':
        return this.templatesService.findByAttributes(company, attributes);
      default:
        return undefined;
    }
  }

  private getObjectWithRequiredAttributes(
    requestedFields: ConfigField[],
    allowedFields: ConfigField[],
  ) {
    let objectWithAttributes = {};
    requestedFields.forEach((requestedField) => {
      const field = find(allowedFields, (f) => f.name === requestedField.name);
      const objectName = field?.definition?.object_name ?? '';
      let attribute = field?.definition?.attribute_name;

      if (attribute) {
        attribute = isArray(attribute) ? attribute : ([attribute] as string[]);
      }

      if (objectWithAttributes[objectName]) {
        objectWithAttributes[objectName] = [
          ...attribute,
          ...objectWithAttributes[objectName],
        ];
      } else {
        objectWithAttributes = {
          ...objectWithAttributes,
          [objectName]: attribute,
        };
      }
    });

    return objectWithAttributes;
  }

  private getDataRequestedFormat(
    objectWithData,
    requestedFields,
    allowedFields,
    allFields,
  ) {
    return requestedFields.reduce((accumulator, requestedField) => {
      const field = find(allowedFields, (f) => f.name === requestedField.name);
      const objectName = field?.definition?.object_name;
      const attributeName = field?.definition?.attribute_name ?? '';
      const fieldName = field?.field_name ?? '';

      const resultKey = findKey(allFields, (f) => {
        return find(f, (fi) => fi.name === field.name);
      });

      let data = isArray(objectWithData[objectName])
        ? objectWithData[objectName]
        : pick(
            (objectWithData[objectName] as any).dataValues,
            isArray(attributeName) ? attributeName : [attributeName],
          );
      if (fieldName) {
        data = data?.[attributeName]?.[fieldName];
      }
      accumulator[resultKey]
        ? (accumulator[resultKey] = {
            [field.display_name ?? field.name]: data,
            ...accumulator[resultKey],
          })
        : (accumulator = {
            ...accumulator,
            [resultKey]: { [field.display_name ?? field.name]: data },
          });

      return accumulator;
    }, {});
  }
}
