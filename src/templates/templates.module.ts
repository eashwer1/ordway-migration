import { Module } from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { TemplatesController } from './templates.controller';
import { templatesProviders } from './templates.providers';

@Module({
  controllers: [TemplatesController],
  providers: [TemplatesService, ...templatesProviders],
  exports: [TemplatesService],
})
export class TemplatesModule {}
