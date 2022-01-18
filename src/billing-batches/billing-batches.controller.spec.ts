import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { BillingBatchesController } from './billing-batches.controller';
import { billingBatchesProviders } from './billing-batches.providers';
import { BillingBatchesService } from './billing-batches.service';

describe('BillingBatchesController', () => {
  let controller: BillingBatchesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [BillingBatchesController],
      providers: [BillingBatchesService, ...billingBatchesProviders],
    }).compile();

    controller = module.get<BillingBatchesController>(BillingBatchesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
