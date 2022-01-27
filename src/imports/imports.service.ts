import { Injectable, Logger } from '@nestjs/common';
import { camelCase, isEmpty, merge, pick, toPairs } from 'lodash';
import { Request } from 'express';
import * as pluralize from 'pluralize';
import { AccountTypesService } from '../account-types/account-types.service';
import { BillingBatchesService } from '../billing-batches/billing-batches.service';
import { BillingPeriodsService } from '../billing-periods/billing-periods.service';
import { ChartOfAccountsService } from '../chart-of-accounts/chart-of-accounts.service';
import { CompaniesService } from '../companies/companies.service';
import { CurrenciesService } from '../currencies/currencies.service';
import { CustomizationFieldsService } from '../customization-fields/customization-fields.service';
import { CustomizationFormulasService } from '../customization-formulas/customization-formulas.service';
import { CustomizationsService } from '../customizations/customizations.service';
import { DropdownTaxonomiesService } from '../dropdown-taxonomies/dropdown-taxonomies.service';
import ConfigMetadata from '../interfaces/metadata.interfaces';
import { users, companies } from '../models';
import { PaymentTermsService } from '../payment-terms/payment-terms.service';
import { PermissionsService } from '../permissions/permissions.service';
import { RetryRulesService } from '../retry-rules/retry-rules.service';
import { RetrySchedulesService } from '../retry-schedules/retry-schedules.service';
import { RevenueRulesService } from '../revenue-rules/revenue-rules.service';
import { RolesService } from '../roles/roles.service';
import { RulesService } from '../rules/rules.service';
import { TemplatesService } from '../templates/templates.service';
import { getTablesOrder } from '../utils/dependency/get-dependency-map';
import { getAllMetadataFields } from '../utils/metadata/read-metadata';
import { TaxesService } from '../taxes/taxes.service';
import { UsersCompaniesService } from '../users-companies/users-companies.service';

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
    private taxesService: TaxesService,
    private templatesService: TemplatesService,
    private usersCompaniesService: UsersCompaniesService,
  ) {}

  public async importConfig(
    requestedObject: ConfigMetadata,
    user: users,
    company: companies,
    req: Request,
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
                [camelCase(f?.definition.attribute_name as string)]: {
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
        const funcParams: [any, users, companies, string[], object, any] = [
          tablesWithData,
          user,
          company,
          associations,
          assocIdMaps,
          req,
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
            return this.companiesService.importCompanySettings(
              tablesWithData,
              company,
              req,
            );
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
          case 'taxes':
            return this.taxesService.create(...funcParams);
          case 'templates':
            return this.templatesService.create(...funcParams);
          case 'users_companies':
            return this.usersCompaniesService.create(...funcParams);
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

      Logger.log(finishedTables);
      Logger.log(orderOfTables);
    }

    if (orderOfTables.length === 0) {
      return 'Import finished';
    }
  }
}
