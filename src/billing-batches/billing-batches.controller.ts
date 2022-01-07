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
import { User } from 'src/decorators/user.decorator';
import { BillingBatchesService } from './billing-batches.service';
import { CreateBillingBatchDto } from './dto/create-billing-batch.dto';
import { UpdateBillingBatchDto } from './dto/update-billing-batch.dto';

@Controller('billing-batches')
@ApiExcludeController()
export class BillingBatchesController {
  constructor(private readonly billingBatchesService: BillingBatchesService) {}

  @Post()
  create(@Body() createBillingBatchDto: CreateBillingBatchDto[], @User() user) {
    return this.billingBatchesService.create(
      createBillingBatchDto,
      user.user,
      user.company,
    );
  }

  @Get()
  findAll() {
    return this.billingBatchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billingBatchesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBillingBatchDto: UpdateBillingBatchDto,
  ) {
    return this.billingBatchesService.update(+id, updateBillingBatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billingBatchesService.remove(+id);
  }
}
