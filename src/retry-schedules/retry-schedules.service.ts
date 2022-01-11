import { Inject, Injectable } from '@nestjs/common';
import { retrySchedules, retrySchedulesAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateRetryScheduleDto } from './dto/update-retry-schedule.dto';

@Injectable()
export class RetrySchedulesService extends CreateServiceProvider<
  retrySchedules,
  retrySchedulesAttributes
> {
  constructor(
    @Inject('RETRY_SCHEDULES_REPOSITORY')
    private retrySchedulesRepository: typeof retrySchedules,
  ) {
    super(retrySchedulesRepository);
  }

  findAll() {
    return `This action returns all retrySchedules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} retrySchedule`;
  }

  update(id: number, updateRetryScheduleDto: UpdateRetryScheduleDto) {
    return `This action updates a #${id} retrySchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} retrySchedule`;
  }
}
