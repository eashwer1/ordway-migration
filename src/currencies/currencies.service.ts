import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { companies, currencies } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';

@Injectable()
export class CurrenciesService {
  constructor(
    @Inject('CURRENCIES_REPOSITORY')
    private currenciesRepository: typeof currencies,
  ) {}
  create(createCurrencyDto: CreateCurrencyDto) {
    return 'This action adds a new currency';
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

  async findByAttributes(
    company: companies,
    attributes?: string[],
  ): Promise<currencies[]> {
    return await findByAttributes(
      this.currenciesRepository,
      company,
      attributes,
    );
  }
}
