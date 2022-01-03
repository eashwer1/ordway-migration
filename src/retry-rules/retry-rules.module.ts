import { Module } from '@nestjs/common';
import { RetryRulesService } from './retry-rules.service';
import { RetryRulesController } from './retry-rules.controller';
import { retryRulesProviders } from './retry-rules.providers';

@Module({
  controllers: [RetryRulesController],
  providers: [RetryRulesService, ...retryRulesProviders],
  exports: [RetryRulesService],
})
export class RetryRulesModule {}
