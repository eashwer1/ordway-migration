import { PartialType } from '@nestjs/swagger';
import { CreateRetryScheduleDto } from './create-retry-schedule.dto';

export class UpdateRetryScheduleDto extends PartialType(CreateRetryScheduleDto) {}
