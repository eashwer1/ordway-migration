import { Test, TestingModule } from '@nestjs/testing';
import { BillingBatchesController } from './billing-batches.controller';
import { BillingBatchesService } from './billing-batches.service';

describe('BillingBatchesController', () => {
  let controller: BillingBatchesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillingBatchesController],
      providers: [BillingBatchesService],
    }).compile();

    controller = module.get<BillingBatchesController>(BillingBatchesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
