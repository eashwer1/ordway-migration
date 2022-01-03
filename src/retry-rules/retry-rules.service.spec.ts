import { Test, TestingModule } from '@nestjs/testing';
import { RetryRulesService } from './retry-rules.service';

describe('RetryRulesService', () => {
  let service: RetryRulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RetryRulesService],
    }).compile();

    service = module.get<RetryRulesService>(RetryRulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
