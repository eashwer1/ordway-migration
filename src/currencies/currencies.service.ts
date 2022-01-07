import { Inject, Injectable } from '@nestjs/common';
import { currencies, currenciesAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateCurrencyDto } from './dto/update-currency.dto';

@Injectable()
export class CurrenciesService extends CreateServiceProvider<
  currencies,
  currenciesAttributes
> {
  constructor(
    @Inject('CURRENCIES_REPOSITORY')
    private currenciesRepository: typeof currencies,
  ) {
    super('currencyCode', currenciesRepository);
  }

  findAll() {
    return `This action returns all currencies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} currency`;
  }

  update(id: number, updateCurrencyDto: UpdateCurrencyDto) {
    return `This action updates a #${id} currency`;
  }

  remove(id: number) {
    return `This action removes a #${id} currency`;
  }
}
