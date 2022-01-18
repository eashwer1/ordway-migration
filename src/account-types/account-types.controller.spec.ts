import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { AccountTypesController } from './account-types.controller';
import { accountTypesProviders } from './account-types.providers';
import { AccountTypesService } from './account-types.service';

describe('AccountTypesController', () => {
  let controller: AccountTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [AccountTypesController],
      providers: [AccountTypesService, ...accountTypesProviders],
    }).compile();

    controller = module.get<AccountTypesController>(AccountTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
