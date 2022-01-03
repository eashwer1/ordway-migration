import { PartialType } from '@nestjs/swagger';
import { CreateRetryRuleDto } from './create-retry-rule.dto';

export class UpdateRetryRuleDto extends PartialType(CreateRetryRuleDto) {}
