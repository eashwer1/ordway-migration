import { Test, TestingModule } from '@nestjs/testing';
import { RetrySchedulesController } from './retry-schedules.controller';
import { RetrySchedulesService } from './retry-schedules.service';

describe('RetrySchedulesController', () => {
  let controller: RetrySchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetrySchedulesController],
      providers: [RetrySchedulesService],
    }).compile();

    controller = module.get<RetrySchedulesController>(RetrySchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
