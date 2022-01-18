import { Test, TestingModule } from '@nestjs/testing';
import { billingBatchesProviders } from './billing-batches.providers';
import { BillingBatchesService } from './billing-batches.service';
import { EventEmitterModule } from '@nestjs/event-emitter';

describe('BillingBatchesService', () => {
  let service: BillingBatchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot({})],
      providers: [BillingBatchesService, ...billingBatchesProviders],
    }).compile();

    service = module.get<BillingBatchesService>(BillingBatchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
