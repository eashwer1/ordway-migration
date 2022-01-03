import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { billingPeriods, companies } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateBillingPeriodDto } from './dto/create-billing-period.dto';
import { UpdateBillingPeriodDto } from './dto/update-billing-period.dto';

@Injectable()
export class BillingPeriodsService {
  constructor(
    @Inject('BILLING_PERIODS_REPOSITORY')
    private billingPeriodsRepository: typeof billingPeriods,
  ) {}
  create(createBillingPeriodDto: CreateBillingPeriodDto) {
    return 'This action adds a new billingPeriod';
  }

  findAll() {
    return `This action returns all billingPeriods`;
  }

  findOne(id: number) {
    return `This action returns a #${id} billingPeriod`;
  }

  update(id: number, updateBillingPeriodDto: UpdateBillingPeriodDto) {
    return `This action updates a #${id} billingPeriod`;
  }

  remove(id: number) {
    return `This action removes a #${id} billingPeriod`;
  }

  async findByAttributes(
    company: companies,
    attributes?: string[],
  ): Promise<billingPeriods[]> {
    return await findByAttributes(
      this.billingPeriodsRepository,
      company,
      attributes,
    );
  }
}
