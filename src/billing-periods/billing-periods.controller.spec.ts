import { Test, TestingModule } from '@nestjs/testing';
import { BillingPeriodsController } from './billing-periods.controller';
import { BillingPeriodsService } from './billing-periods.service';

describe('BillingPeriodsController', () => {
  let controller: BillingPeriodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillingPeriodsController],
      providers: [BillingPeriodsService],
    }).compile();

    controller = module.get<BillingPeriodsController>(BillingPeriodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
