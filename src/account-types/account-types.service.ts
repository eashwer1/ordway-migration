import { Inject, Injectable } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { accountTypes, accountTypesAttributes } from '../models/accountTypes';
@ApiBearerAuth()
@Injectable()
export class AccountTypesService extends CreateServiceProvider<
  accountTypes,
  accountTypesAttributes
> {
  constructor(
    @Inject('ACCOUNT_TYPES_REPOSITORY')
    private accountTypesRepository: typeof accountTypes,
  ) {
    super(accountTypesRepository);
  }

  findAll() {
    return `This action returns all billingBatches`;
  }
}
