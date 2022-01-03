import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { billingBatches, companies } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateBillingBatchDto } from './dto/create-billing-batch.dto';
import { UpdateBillingBatchDto } from './dto/update-billing-batch.dto';

@Injectable()
export class BillingBatchesService {
  constructor(
    @Inject('BILLING_BATCHES_REPOSITORY')
    private billingBatchesRepository: typeof billingBatches,
  ) {}

  create(createBillingBatchDto: CreateBillingBatchDto) {
    return 'This action adds a new billingBatch';
  }

  findAll() {
    return `This action returns all billingBatches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} billingBatch`;
  }

  async findByAttributes(
    company: companies,
    attributes?: string[],
  ): Promise<billingBatches[]> {
    return await findByAttributes(
      this.billingBatchesRepository,
      company,
      attributes,
    );
  }

  update(id: number, updateBillingBatchDto: UpdateBillingBatchDto) {
    return `This action updates a #${id} billingBatch`;
  }

  remove(id: number) {
    return `This action removes a #${id} billingBatch`;
  }
}
