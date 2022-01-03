import { PartialType } from '@nestjs/swagger';
import { CreateRevenueRuleDto } from './create-revenue-rule.dto';

export class UpdateRevenueRuleDto extends PartialType(CreateRevenueRuleDto) {}
