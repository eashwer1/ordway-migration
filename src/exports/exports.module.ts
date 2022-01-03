import { Module } from '@nestjs/common';
import { ExportsService } from './exports.service';
import { ExportsController } from './exports.controller';
import { AccountTypesModule } from 'src/account-types/account-types.module';
import { BillingBatchesModule } from 'src/billing-batches/billing-batches.module';
import { BillingPeriodsModule } from 'src/billing-periods/billing-periods.module';
import { ChartOfAccountsModule } from 'src/chart-of-accounts/chart-of-accounts.module';
import { CompaniesModule } from 'src/companies/companies.module';
import { CurrenciesModule } from 'src/currencies/currencies.module';
import { CustomizationFieldsModule } from 'src/customization-fields/customization-fields.module';
import { CustomizationFormulasModule } from 'src/customization-formulas/customization-formulas.module';
import { CustomizationsModule } from 'src/customizations/customizations.module';
import { DropdownTaxonomiesModule } from 'src/dropdown-taxonomies/dropdown-taxonomies.module';
import { PaymentTermsModule } from 'src/payment-terms/payment-terms.module';
import { PermissionsModule } from 'src/permissions/permissions.module';
import { RetryRulesModule } from 'src/retry-rules/retry-rules.module';
import { RetrySchedulesModule } from 'src/retry-schedules/retry-schedules.module';
import { RevenueRulesModule } from 'src/revenue-rules/revenue-rules.module';
import { RolesModule } from 'src/roles/roles.module';
import { RulesModule } from 'src/rules/rules.module';
import { TemplatesModule } from 'src/templates/templates.module';

@Module({
  imports: [
    AccountTypesModule,
    BillingBatchesModule,
    BillingPeriodsModule,
    ChartOfAccountsModule,
    CompaniesModule,
    CurrenciesModule,
    CustomizationFieldsModule,
    CustomizationFormulasModule,
    CustomizationsModule,
    DropdownTaxonomiesModule,
    PaymentTermsModule,
    PermissionsModule,
    RetryRulesModule,
    RetrySchedulesModule,
    RevenueRulesModule,
    RolesModule,
    RulesModule,
    TemplatesModule,
  ],
  controllers: [ExportsController],
  providers: [ExportsService],
})
export class ExportsModule {}
