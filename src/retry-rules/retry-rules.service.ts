import { Inject, Injectable } from '@nestjs/common';
import { retryRules, retryRulesAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateRetryRuleDto } from './dto/update-retry-rule.dto';

@Injectable()
export class RetryRulesService extends CreateServiceProvider<
  retryRules,
  retryRulesAttributes
> {
  constructor(
    @Inject('RETRY_RULES_REPOSITORY')
    private retryRulesRepository: typeof retryRules,
  ) {
    super(retryRulesRepository);
  }

  findAll() {
    return `This action returns all retryRules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} retryRule`;
  }

  update(id: number, updateRetryRuleDto: UpdateRetryRuleDto) {
    return `This action updates a #${id} retryRule`;
  }

  remove(id: number) {
    return `This action removes a #${id} retryRule`;
  }
}
