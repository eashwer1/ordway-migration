import { Test, TestingModule } from '@nestjs/testing';
import { BillingPeriodsService } from './billing-periods.service';

describe('BillingPeriodsService', () => {
  let service: BillingPeriodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillingPeriodsService],
    }).compile();

    service = module.get<BillingPeriodsService>(BillingPeriodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
