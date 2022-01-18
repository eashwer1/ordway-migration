import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { retrySchedulesProviders } from './retry-schedules.providers';
import { RetrySchedulesService } from './retry-schedules.service';

describe('RetrySchedulesService', () => {
  let service: RetrySchedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [RetrySchedulesService, ...retrySchedulesProviders],
    }).compile();

    service = module.get<RetrySchedulesService>(RetrySchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
