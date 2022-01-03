import { Module } from '@nestjs/common';
import { CustomizationsService } from './customizations.service';
import { CustomizationsController } from './customizations.controller';
import { customizationsProviders } from './customizations.providers';

@Module({
  controllers: [CustomizationsController],
  providers: [CustomizationsService, ...customizationsProviders],
  exports: [CustomizationsService],
})
export class CustomizationsModule {}
