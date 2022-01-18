import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { paymentTermsProviders } from './payment-terms.providers';
import { PaymentTermsService } from './payment-terms.service';

describe('PaymentTermsService', () => {
  let service: PaymentTermsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [PaymentTermsService, ...paymentTermsProviders],
    }).compile();

    service = module.get<PaymentTermsService>(PaymentTermsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
