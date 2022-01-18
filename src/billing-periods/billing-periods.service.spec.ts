import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { billingPeriodsProviders } from './billing-periods.providers';
import { BillingPeriodsService } from './billing-periods.service';

describe('BillingPeriodsService', () => {
  let service: BillingPeriodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [BillingPeriodsService, ...billingPeriodsProviders],
    }).compile();

    service = module.get<BillingPeriodsService>(BillingPeriodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
