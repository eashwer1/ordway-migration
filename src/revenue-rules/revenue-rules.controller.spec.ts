import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { RevenueRulesController } from './revenue-rules.controller';
import { revenueRulesProviders } from './revenue-rules.providers';
import { RevenueRulesService } from './revenue-rules.service';

describe('RevenueRulesController', () => {
  let controller: RevenueRulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [RevenueRulesController],
      providers: [RevenueRulesService, ...revenueRulesProviders],
    }).compile();

    controller = module.get<RevenueRulesController>(RevenueRulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
