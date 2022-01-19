import { Module } from '@nestjs/common';
import { TaxesService } from './taxes.service';
import { TaxesController } from './taxes.controller';
import { taxesProviders } from './taxes.providers';

@Module({
  controllers: [TaxesController],
  providers: [TaxesService, ...taxesProviders],
  exports: [TaxesService],
})
export class TaxesModule {}
