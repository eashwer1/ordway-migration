import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { RetryRulesController } from './retry-rules.controller';
import { retryRulesProviders } from './retry-rules.providers';
import { RetryRulesService } from './retry-rules.service';

describe('RetryRulesController', () => {
  let controller: RetryRulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [RetryRulesController],
      providers: [RetryRulesService, ...retryRulesProviders],
    }).compile();

    controller = module.get<RetryRulesController>(RetryRulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
