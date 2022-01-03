import { Module } from '@nestjs/common';
import { CustomizationFieldsService } from './customization-fields.service';
import { CustomizationFieldsController } from './customization-fields.controller';
import { customizationFieldsProviders } from './customization-fields.providers';

@Module({
  controllers: [CustomizationFieldsController],
  providers: [CustomizationFieldsService, ...customizationFieldsProviders],
  exports: [CustomizationFieldsService],
})
export class CustomizationFieldsModule {}
