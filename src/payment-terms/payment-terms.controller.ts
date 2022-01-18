import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PaymentTermsService } from './payment-terms.service';
import { CreatePaymentTermDto } from './dto/create-payment-term.dto';
import { UpdatePaymentTermDto } from './dto/update-payment-term.dto';
import { ApiExcludeController } from '@nestjs/swagger';
import { User } from '../decorators/user.decorator';

@Controller('payment-terms')
@ApiExcludeController()
export class PaymentTermsController {
  constructor(private readonly paymentTermsService: PaymentTermsService) {}

  @Post()
  create(
    @Body() createPaymentTermDto: CreatePaymentTermDto[],
    @User() userDetail,
  ) {
    const { user, company } = userDetail;
    return this.paymentTermsService.create(createPaymentTermDto, user, company);
  }

  @Get()
  findAll() {
    return this.paymentTermsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentTermsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentTermDto: UpdatePaymentTermDto,
  ) {
    return this.paymentTermsService.update(+id, updatePaymentTermDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentTermsService.remove(+id);
  }
}
