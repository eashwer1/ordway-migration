import { Module } from '@nestjs/common';
import { RetrySchedulesService } from './retry-schedules.service';
import { RetrySchedulesController } from './retry-schedules.controller';
import { retrySchedulesProviders } from './retry-schedules.providers';

@Module({
  controllers: [RetrySchedulesController],
  providers: [RetrySchedulesService, ...retrySchedulesProviders],
  exports: [RetrySchedulesService],
})
export class RetrySchedulesModule {}
