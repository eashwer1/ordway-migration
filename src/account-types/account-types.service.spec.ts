import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { accountTypesProviders } from './account-types.providers';
import { AccountTypesService } from './account-types.service';

describe('AccountTypesService', () => {
  let service: AccountTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [AccountTypesService, ...accountTypesProviders],
    }).compile();

    service = module.get<AccountTypesService>(AccountTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
