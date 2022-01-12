import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { billingPeriods, billingPeriodsAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateBillingPeriodDto } from './dto/update-billing-period.dto';

@Injectable()
export class BillingPeriodsService extends CreateServiceProvider<
  billingPeriods,
  billingPeriodsAttributes
> {
  constructor(
    @Inject('BILLING_PERIODS_REPOSITORY')
    private billingPeriodsRepository: typeof billingPeriods,
    private eventEmitter: EventEmitter2,
  ) {
    super(billingPeriodsRepository, eventEmitter);
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
}
