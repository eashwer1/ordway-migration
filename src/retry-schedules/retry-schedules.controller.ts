import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RetrySchedulesService } from './retry-schedules.service';
import { CreateRetryScheduleDto } from './dto/create-retry-schedule.dto';
import { UpdateRetryScheduleDto } from './dto/update-retry-schedule.dto';
import { ApiExcludeController } from '@nestjs/swagger';

@Controller('retry-schedules')
@ApiExcludeController()
export class RetrySchedulesController {
  constructor(private readonly retrySchedulesService: RetrySchedulesService) {}

  @Post()
  create(@Body() createRetryScheduleDto: CreateRetryScheduleDto) {
    return this.retrySchedulesService.create(createRetryScheduleDto);
  }

  @Get()
  findAll() {
    return this.retrySchedulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.retrySchedulesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRetryScheduleDto: UpdateRetryScheduleDto,
  ) {
    return this.retrySchedulesService.update(+id, updateRetryScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.retrySchedulesService.remove(+id);
  }
}
