import { Inject, Injectable } from '@nestjs/common';
import { revenueRules, revenueRulesAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateRevenueRuleDto } from './dto/update-revenue-rule.dto';

@Injectable()
export class RevenueRulesService extends CreateServiceProvider<
  revenueRules,
  revenueRulesAttributes
> {
  constructor(
    @Inject('REVENUE_RULES_REPOSITORY')
    private revenueRulesRepository: typeof revenueRules,
  ) {
    super('name', revenueRulesRepository);
  }

  findAll() {
    return `This action returns all revenueRules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} revenueRule`;
  }

  update(id: number, updateRevenueRuleDto: UpdateRevenueRuleDto) {
    return `This action updates a #${id} revenueRule`;
  }

  remove(id: number) {
    return `This action removes a #${id} revenueRule`;
  }
}
