import { Module } from '@nestjs/common';
import { ChartOfAccountsService } from './chart-of-accounts.service';
import { ChartOfAccountsController } from './chart-of-accounts.controller';
import { chartOfAccountsProviders } from './chart-of-accounts.providers';

@Module({
  controllers: [ChartOfAccountsController],
  providers: [ChartOfAccountsService, ...chartOfAccountsProviders],
  exports: [ChartOfAccountsService],
})
export class ChartOfAccountsModule {}
