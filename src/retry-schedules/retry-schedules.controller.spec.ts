import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { RetrySchedulesController } from './retry-schedules.controller';
import { retrySchedulesProviders } from './retry-schedules.providers';
import { RetrySchedulesService } from './retry-schedules.service';

describe('RetrySchedulesController', () => {
  let controller: RetrySchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [RetrySchedulesController],
      providers: [RetrySchedulesService, ...retrySchedulesProviders],
    }).compile();

    controller = module.get<RetrySchedulesController>(RetrySchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
