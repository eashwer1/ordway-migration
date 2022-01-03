import { Test, TestingModule } from '@nestjs/testing';
import { RevenueRulesController } from './revenue-rules.controller';
import { RevenueRulesService } from './revenue-rules.service';

describe('RevenueRulesController', () => {
  let controller: RevenueRulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RevenueRulesController],
      providers: [RevenueRulesService],
    }).compile();

    controller = module.get<RevenueRulesController>(RevenueRulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
