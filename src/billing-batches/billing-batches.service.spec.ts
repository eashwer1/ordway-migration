import { Test, TestingModule } from '@nestjs/testing';
import { BillingBatchesService } from './billing-batches.service';

describe('BillingBatchesService', () => {
  let service: BillingBatchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillingBatchesService],
    }).compile();

    service = module.get<BillingBatchesService>(BillingBatchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
