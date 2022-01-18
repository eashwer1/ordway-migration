import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { ChartOfAccountsController } from './chart-of-accounts.controller';
import { chartOfAccountsProviders } from './chart-of-accounts.providers';
import { ChartOfAccountsService } from './chart-of-accounts.service';

describe('ChartOfAccountsController', () => {
  let controller: ChartOfAccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [ChartOfAccountsController],
      providers: [ChartOfAccountsService, ...chartOfAccountsProviders],
    }).compile();

    controller = module.get<ChartOfAccountsController>(
      ChartOfAccountsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
