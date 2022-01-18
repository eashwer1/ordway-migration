import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { User } from '../decorators/user.decorator';
import { BillingPeriodsService } from './billing-periods.service';
import { CreateBillingPeriodDto } from './dto/create-billing-period.dto';
import { UpdateBillingPeriodDto } from './dto/update-billing-period.dto';

@Controller('billing-periods')
@ApiExcludeController()
export class BillingPeriodsController {
  constructor(private readonly billingPeriodsService: BillingPeriodsService) {}

  @Post()
  create(
    @Body() createBillingPeriodDto: CreateBillingPeriodDto[],
    @User() userDetail,
  ) {
    const { user, company } = userDetail;
    return this.billingPeriodsService.create(
      createBillingPeriodDto,
      user,
      company,
    );
  }

  @Get()
  findAll() {
    return this.billingPeriodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billingPeriodsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBillingPeriodDto: UpdateBillingPeriodDto,
  ) {
    return this.billingPeriodsService.update(+id, updateBillingPeriodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billingPeriodsService.remove(+id);
  }
}
