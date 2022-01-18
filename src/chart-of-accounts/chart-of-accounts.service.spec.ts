import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { chartOfAccountsProviders } from './chart-of-accounts.providers';
import { ChartOfAccountsService } from './chart-of-accounts.service';

describe('ChartOfAccountsService', () => {
  let service: ChartOfAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [ChartOfAccountsService, ...chartOfAccountsProviders],
    }).compile();

    service = module.get<ChartOfAccountsService>(ChartOfAccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
