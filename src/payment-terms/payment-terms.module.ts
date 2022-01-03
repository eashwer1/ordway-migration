import { Module } from '@nestjs/common';
import { PaymentTermsService } from './payment-terms.service';
import { PaymentTermsController } from './payment-terms.controller';
import { paymentTermsProviders } from './payment-terms.providers';

@Module({
  controllers: [PaymentTermsController],
  providers: [PaymentTermsService, ...paymentTermsProviders],
  exports: [PaymentTermsService],
})
export class PaymentTermsModule {}
