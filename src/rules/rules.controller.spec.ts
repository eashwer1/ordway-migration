import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { RulesController } from './rules.controller';
import { rulesProviders } from './rules.providers';
import { RulesService } from './rules.service';

describe('RulesController', () => {
  let controller: RulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [RulesController],
      providers: [RulesService, ...rulesProviders],
    }).compile();

    controller = module.get<RulesController>(RulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
