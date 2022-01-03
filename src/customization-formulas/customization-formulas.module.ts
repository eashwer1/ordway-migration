import { Module } from '@nestjs/common';
import { CustomizationFormulasService } from './customization-formulas.service';
import { CustomizationFormulasController } from './customization-formulas.controller';
import { customizationFormulasProviders } from './customization-formulas.providers';

@Module({
  controllers: [CustomizationFormulasController],
  providers: [CustomizationFormulasService, ...customizationFormulasProviders],
  exports: [CustomizationFormulasService],
})
export class CustomizationFormulasModule {}
