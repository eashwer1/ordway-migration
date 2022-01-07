import { Inject, Injectable } from '@nestjs/common';
import { billingBatches, billingBatchesAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateBillingBatchDto } from './dto/update-billing-batch.dto';

@Injectable()
export class BillingBatchesService extends CreateServiceProvider<
  billingBatches,
  billingBatchesAttributes
> {
  constructor(
    @Inject('BILLING_BATCHES_REPOSITORY')
    private billingBatchesRepository: typeof billingBatches,
  ) {
    super('batch', billingBatchesRepository);
  }

  findAll() {
    return `This action returns all billingBatches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} billingBatch`;
  }

  update(id: number, updateBillingBatchDto: UpdateBillingBatchDto) {
    return `This action updates a #${id} billingBatch`;
  }

  remove(id: number) {
    return `This action removes a #${id} billingBatch`;
  }
}
