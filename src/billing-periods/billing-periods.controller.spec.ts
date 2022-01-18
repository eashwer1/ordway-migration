import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { BillingPeriodsController } from './billing-periods.controller';
import { billingPeriodsProviders } from './billing-periods.providers';
import { BillingPeriodsService } from './billing-periods.service';

describe('BillingPeriodsController', () => {
  let controller: BillingPeriodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [BillingPeriodsController],
      providers: [BillingPeriodsService, ...billingPeriodsProviders],
    }).compile();

    controller = module.get<BillingPeriodsController>(BillingPeriodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
