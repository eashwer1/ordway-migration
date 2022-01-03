import { Module } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { CurrenciesController } from './currencies.controller';
import { currenciesProviders } from './currencies.providers';

@Module({
  controllers: [CurrenciesController],
  providers: [CurrenciesService, ...currenciesProviders],
  exports: [CurrenciesService],
})
export class CurrenciesModule {}
