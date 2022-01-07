import { Injectable } from '@nestjs/common';
import { isEmpty, merge, pick, toPairs } from 'lodash';
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
import { DropdownTaxonomiesService } from 'src/dropdown-taxonomies/dropdown-taxonomies.service';
import ConfigMetadata from 'src/interfaces/metadata.interfaces';
import { users, companies } from 'src/models';
import { PaymentTermsService } from 'src/payment-terms/payment-terms.service';
import { PermissionsService } from 'src/permissions/permissions.service';
import { RetryRulesService } from 'src/retry-rules/retry-rules.service';
import { RetrySchedulesService } from 'src/retry-schedules/retry-schedules.service';
import { RevenueRulesService } from 'src/revenue-rules/revenue-rules.service';
import { RolesService } from 'src/roles/roles.service';
import { RulesService } from 'src/rules/rules.service';
import { TemplatesService } from 'src/templates/templates.service';
import { getTablesOrder } from 'src/utils/dependency/get-dependency-map';
import { getAllMetadataFields } from 'src/utils/metadata/read-metadata';

@Injectable()
export class ImportsService {
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

  public async importConfig(
    requestedObject: ConfigMetadata,
    user: users,
    company: companies,
  ) {
    const allowedFields = await getAllMetadataFields(user, company);
    const allRequestedValues = toPairs(requestedObject);
    let objects = {};
    let objectDefinition;
    allowedFields.forEach((f) => {
      const field = allRequestedValues.find(
        (arv) => arv?.[1]?.[f.display_name ?? f.name] !== undefined,
      );
      if (field) {
        const attrValue =
          f?.field_name === undefined
            ? field?.[1]?.[f.display_name ?? f.name]
            : {
                [f?.definition.attribute_name as string]: {
                  [f?.field_name]: field?.[1]?.[f.display_name ?? f.name],
                },
              };
        objectDefinition = {
          [f?.definition.object_name]: attrValue,
        };
        objects = merge(objects, objectDefinition);
      }
    });

    const tableNames = Object.keys(objects);
    let orderOfTables = await getTablesOrder(tableNames, user, company);
    const finishedTables = {};

    while (!isEmpty(orderOfTables)) {
      const levelTables = orderOfTables.filter((table) => {
        const [_tableName, assocs] = Object.entries(table)[0];
        const waitingAssoc = assocs?.filter(
          (assoc) => assoc !== 'user' && finishedTables[assoc] === undefined,
        );

        return isEmpty(waitingAssoc);
      });

      const promises = levelTables.map((tableAssoc) => {
        const [table, associations] = Object.entries(tableAssoc)[0];
        const assocIdMaps = pick(finishedTables, associations);
        const tableName = pluralize.plural(table);
        const tablesWithData = objects[table];
        let funcParams: [any, users, companies, string[], object] = [
          tablesWithData,
          user,
          company,
          associations,
          assocIdMaps,
        ];
        switch (tableName) {
          case 'account_types':
            return this.accountTypesService.create(...funcParams);
          case 'billing_batches':
            return this.billingBatchesService.create(...funcParams);
          case 'billing_periods':
            return this.billingPeriodsService.create(...funcParams);
          case 'chart_of_accounts':
            return this.chartOfAccountsService.create(...funcParams);
          case 'companies':
            funcParams = [
              [tablesWithData],
              user,
              company,
              associations,
              assocIdMaps,
            ];
            return true; //this.companiesService.create(...funcParams);
          case 'currencies':
            funcParams[3].push('user');
            return this.currenciesService.create(...funcParams);
          case 'customization_fields':
            return this.customizationFieldsService.create(...funcParams);
          case 'customization_formulas':
            return this.customizationFormulasService.create(...funcParams);
          case 'customizations':
            return this.customizationsService.create(...funcParams);
          case 'dropdown_taxonomies':
            return this.dropdownTaxonomiesService.create(...funcParams);
          case 'payment_terms':
            return this.paymentTermsService.create(...funcParams);
          case 'permissions':
            return this.permissionsService.create(...funcParams);
          case 'retry_rules':
            return this.retryRulesService.create(...funcParams);
          case 'retry_schedules':
            return this.retrySchedulesService.create(...funcParams);
          case 'revenue_rules':
            return this.revenueRulesService.create(...funcParams);
          case 'roles':
            return this.rolesService.create(...funcParams);
          case 'rules':
            return this.rulesService.create(...funcParams);
          case 'templates':
            return this.templatesService.create(...funcParams);
          default:
            return undefined;
        }
      });

      const allTables = await Promise.all(promises);

      allTables.forEach((t, index) => {
        finishedTables[Object.entries(levelTables[index])[0][0]] = t;
      });
      orderOfTables = orderOfTables.filter(
        (table) => finishedTables[Object.entries(table)[0][0]] === undefined,
      );
    }

    if (orderOfTables.length === 0) {
      return 'Import finished';
    }
  }
}
