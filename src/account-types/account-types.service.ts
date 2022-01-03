import { Body, Inject, Injectable, Logger } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { companies } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { accountTypes } from '../models/accountTypes';
import { CreateAccountTypesDto } from './dtos/create-account-types.dto';

@ApiBearerAuth()
@Injectable()
export class AccountTypesService {
  constructor(
    @Inject('ACCOUNT_TYPES_REPOSITORY')
    private accountTypesRepository: typeof accountTypes,
  ) {}

  findAll() {
    return `This action returns all billingBatches`;
  }

  async findByAttributes(
    company: companies,
    attributes?: string[],
  ): Promise<accountTypes[]> {
    return findByAttributes(this.accountTypesRepository, company, attributes);
  }

  async createAccountTypes(
    @Body() createAccountTypesDto: CreateAccountTypesDto[],
    @User() user,
  ): Promise<accountTypes[]> {
    const InsertingData = createAccountTypesDto.map((c) => ({
      ...c,
      companyId: user.companyId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    const rowsInserted = await this.accountTypesRepository.bulkCreate(
      InsertingData,
      { returning: true },
    );
    this.accountTypesRepository.afterBulkCreate((instances) => {
      Logger.debug(`account types create ${instances?.length}`);
    });
    return rowsInserted;
  }
}
