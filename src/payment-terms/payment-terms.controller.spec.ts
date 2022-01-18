import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { PaymentTermsController } from './payment-terms.controller';
import { paymentTermsProviders } from './payment-terms.providers';
import { PaymentTermsService } from './payment-terms.service';

describe('PaymentTermsController', () => {
  let controller: PaymentTermsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [PaymentTermsController],
      providers: [PaymentTermsService, ...paymentTermsProviders],
    }).compile();

    controller = module.get<PaymentTermsController>(PaymentTermsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
