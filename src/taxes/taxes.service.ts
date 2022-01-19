import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { taxes, taxesAttributes } from '../models';
import { CreateServiceProvider } from '../parents/abstract-service';
import { UpdateTaxDto } from './dto/update-tax.dto';

@Injectable()
export class TaxesService extends CreateServiceProvider<
  taxes,
  taxesAttributes
> {
  constructor(
    @Inject('TAXES_REPOSITORY')
    private taxesRepository: typeof taxes,
    private eventEmitter: EventEmitter2,
  ) {
    super(taxesRepository, eventEmitter);
  }
  findAll() {
    return `This action returns all taxes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tax`;
  }

  update(id: number, updateTaxDto: UpdateTaxDto) {
    return `This action updates a #${id} tax`;
  }

  remove(id: number) {
    return `This action removes a #${id} tax`;
  }
}
