import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { paymentTerms } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreatePaymentTermDto } from './dto/create-payment-term.dto';
import { UpdatePaymentTermDto } from './dto/update-payment-term.dto';

@Injectable()
export class PaymentTermsService {
  constructor(
    @Inject('PAYMENT_TERMS_REPOSITORY')
    private paymentTermsRepository: typeof paymentTerms,
  ) {}
  create(createPaymentTermDto: CreatePaymentTermDto) {
    return 'This action adds a new paymentTerm';
  }

  findAll() {
    return `This action returns all paymentTerms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentTerm`;
  }

  update(id: number, updatePaymentTermDto: UpdatePaymentTermDto) {
    return `This action updates a #${id} paymentTerm`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentTerm`;
  }

  async findByAttributes(
    user,
    attributes?: string[],
  ): Promise<paymentTerms[]> {
    return await findByAttributes(
      this.paymentTermsRepository,
      user,
      attributes,
    );
  }
}
