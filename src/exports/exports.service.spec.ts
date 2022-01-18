import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { ChartOfAccountsModule } from '../chart-of-accounts/chart-of-accounts.module';
import { CompaniesModule } from '../companies/companies.module';
import { CurrenciesModule } from '../currencies/currencies.module';
import { CustomizationFieldsModule } from '../customization-fields/customization-fields.module';
import { CustomizationFormulasModule } from '../customization-formulas/customization-formulas.module';
import { CustomizationsModule } from '../customizations/customizations.module';
import { DropdownTaxonomiesModule } from '../dropdown-taxonomies/dropdown-taxonomies.module';
import { PaymentTermsModule } from '../payment-terms/payment-terms.module';
import { PermissionsModule } from '../permissions/permissions.module';
import { RetryRulesModule } from '../retry-rules/retry-rules.module';
import { RetrySchedulesModule } from '../retry-schedules/retry-schedules.module';
import { RevenueRulesModule } from '../revenue-rules/revenue-rules.module';
import { RolesModule } from '../roles/roles.module';
import { RulesModule } from '../rules/rules.module';
import { TemplatesModule } from '../templates/templates.module';
import { AccountTypesModule } from '../account-types/account-types.module';
import { BillingBatchesModule } from '../billing-batches/billing-batches.module';
import { BillingPeriodsModule } from '../billing-periods/billing-periods.module';
import { ExportsModule } from './exports.module';
import { ExportsService } from './exports.service';

describe('ExportsService', () => {
  let service: ExportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
        EventEmitterModule.forRoot(),
      ],
      providers: [ExportsService],
    }).compile();

    service = module.get<ExportsService>(ExportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
