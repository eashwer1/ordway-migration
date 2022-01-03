import { Module } from '@nestjs/common';
import { RevenueRulesService } from './revenue-rules.service';
import { RevenueRulesController } from './revenue-rules.controller';
import { revenueRulesProviders } from './revenue-rules.providers';

@Module({
  controllers: [RevenueRulesController],
  providers: [RevenueRulesService, ...revenueRulesProviders],
  exports: [RevenueRulesService],
})
export class RevenueRulesModule {}
