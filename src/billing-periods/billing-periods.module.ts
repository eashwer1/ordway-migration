import { Module } from '@nestjs/common';
import { BillingPeriodsService } from './billing-periods.service';
import { BillingPeriodsController } from './billing-periods.controller';
import { billingPeriodsProviders } from './billing-periods.providers';

@Module({
  controllers: [BillingPeriodsController],
  providers: [BillingPeriodsService, ...billingPeriodsProviders],
  exports: [BillingPeriodsService],
})
export class BillingPeriodsModule {}
