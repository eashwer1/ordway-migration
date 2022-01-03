import { Test, TestingModule } from '@nestjs/testing';
import { RetryRulesController } from './retry-rules.controller';
import { RetryRulesService } from './retry-rules.service';

describe('RetryRulesController', () => {
  let controller: RetryRulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetryRulesController],
      providers: [RetryRulesService],
    }).compile();

    controller = module.get<RetryRulesController>(RetryRulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
