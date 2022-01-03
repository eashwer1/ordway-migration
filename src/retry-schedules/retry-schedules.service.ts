import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { retrySchedules } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateRetryScheduleDto } from './dto/create-retry-schedule.dto';
import { UpdateRetryScheduleDto } from './dto/update-retry-schedule.dto';

@Injectable()
export class RetrySchedulesService {
  constructor(
    @Inject('RETRY_SCHEDULES_REPOSITORY')
    private retrySchedulesRepository: typeof retrySchedules,
  ) {}
  create(createRetryScheduleDto: CreateRetryScheduleDto) {
    return 'This action adds a new retrySchedule';
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

  async findByAttributes(
    user,
    attributes?: string[],
  ): Promise<retrySchedules[]> {
    return await findByAttributes(
      this.retrySchedulesRepository,
      user,
      attributes,
    );
  }
}
