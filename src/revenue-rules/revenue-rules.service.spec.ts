import { Test, TestingModule } from '@nestjs/testing';
import { RevenueRulesService } from './revenue-rules.service';

describe('RevenueRulesService', () => {
  let service: RevenueRulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevenueRulesService],
    }).compile();

    service = module.get<RevenueRulesService>(RevenueRulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
