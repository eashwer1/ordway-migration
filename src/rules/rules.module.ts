import { Module } from '@nestjs/common';
import { RulesService } from './rules.service';
import { RulesController } from './rules.controller';
import { rulesProviders } from './rules.providers';

@Module({
  controllers: [RulesController],
  providers: [RulesService, ...rulesProviders],
  exports: [RulesService],
})
export class RulesModule {}
