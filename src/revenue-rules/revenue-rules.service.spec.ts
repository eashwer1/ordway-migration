import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { revenueRulesProviders } from './revenue-rules.providers';
import { RevenueRulesService } from './revenue-rules.service';

describe('RevenueRulesService', () => {
  let service: RevenueRulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [RevenueRulesService, ...revenueRulesProviders],
    }).compile();

    service = module.get<RevenueRulesService>(RevenueRulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
