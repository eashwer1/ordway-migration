import { Module } from '@nestjs/common';
import { BillingBatchesService } from './billing-batches.service';
import { BillingBatchesController } from './billing-batches.controller';
import { billingBatchesProviders } from './billing-batches.providers';

@Module({
  controllers: [BillingBatchesController],
  providers: [BillingBatchesService, ...billingBatchesProviders],
  exports: [BillingBatchesService],
})
export class BillingBatchesModule {}
