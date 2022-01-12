import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { AccountTypesModule } from './account-types/account-types.module';
import { UsersModule } from './users/users.module';
import { ExportsModule } from './exports/exports.module';
import { BillingBatchesModule } from './billing-batches/billing-batches.module';
import { BillingPeriodsModule } from './billing-periods/billing-periods.module';
import { ChartOfAccountsModule } from './chart-of-accounts/chart-of-accounts.module';
import { CompaniesModule } from './companies/companies.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { CustomizationFieldsModule } from './customization-fields/customization-fields.module';
import { CustomizationFormulasModule } from './customization-formulas/customization-formulas.module';
import { CustomizationsModule } from './customizations/customizations.module';
import { DropdownTaxonomiesModule } from './dropdown-taxonomies/dropdown-taxonomies.module';
import { PaymentTermsModule } from './payment-terms/payment-terms.module';
import { PermissionsModule } from './permissions/permissions.module';
import { RetryRulesModule } from './retry-rules/retry-rules.module';
import { RetrySchedulesModule } from './retry-schedules/retry-schedules.module';
import { RevenueRulesModule } from './revenue-rules/revenue-rules.module';
import { RolesModule } from './roles/roles.module';
import { RulesModule } from './rules/rules.module';
import { TemplatesModule } from './templates/templates.module';
import { UsersCompaniesModule } from './users-companies/users-companies.module';
import { ImportsModule } from './imports/imports.module';
import { HealthCheckModule } from './health-check/health-check.module';
import { AuditLogsModule } from './audit-logs/audit-logs.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EventEmitterModule.forRoot({
      wildcard: true,
    }),
    DatabaseModule,
    UsersModule,
    AccountTypesModule,
    AuthModule,
    ExportsModule,
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
    UsersCompaniesModule,
    ImportsModule,
    HealthCheckModule,
    AuditLogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
