import { PartialType } from '@nestjs/swagger';
import { CreateBillingBatchDto } from './create-billing-batch.dto';

export class UpdateBillingBatchDto extends PartialType(CreateBillingBatchDto) {}
