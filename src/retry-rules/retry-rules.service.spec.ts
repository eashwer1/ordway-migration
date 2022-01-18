import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { retryRulesProviders } from './retry-rules.providers';
import { RetryRulesService } from './retry-rules.service';

describe('RetryRulesService', () => {
  let service: RetryRulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [RetryRulesService, ...retryRulesProviders],
    }).compile();

    service = module.get<RetryRulesService>(RetryRulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
