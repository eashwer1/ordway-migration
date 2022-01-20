import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateServiceProvider } from '../parents/abstract-service';
import { accountTypes, accountTypesAttributes } from '../models';
@ApiBearerAuth()
@Injectable()
export class AccountTypesService extends CreateServiceProvider<
  accountTypes,
  accountTypesAttributes
> {
  constructor(
    @Inject('ACCOUNT_TYPES_REPOSITORY')
    private accountTypesRepository: typeof accountTypes,
    private eventEmitter: EventEmitter2,
  ) {
    super(accountTypesRepository, eventEmitter);
  }

  findAll() {
    return `This action returns all billingBatches`;
  }
}
