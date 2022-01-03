import { Test, TestingModule } from '@nestjs/testing';
import { RetrySchedulesService } from './retry-schedules.service';

describe('RetrySchedulesService', () => {
  let service: RetrySchedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RetrySchedulesService],
    }).compile();

    service = module.get<RetrySchedulesService>(RetrySchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
