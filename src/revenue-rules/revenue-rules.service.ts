import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { revenueRules } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateRevenueRuleDto } from './dto/create-revenue-rule.dto';
import { UpdateRevenueRuleDto } from './dto/update-revenue-rule.dto';

@Injectable()
export class RevenueRulesService {
  constructor(
    @Inject('REVENUE_RULES_REPOSITORY')
    private revenueRulesRepository: typeof revenueRules,
  ) {}
  create(createRevenueRuleDto: CreateRevenueRuleDto) {
    return 'This action adds a new revenueRule';
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

  async findByAttributes(
    user,
    attributes?: string[],
  ): Promise<revenueRules[]> {
    return await findByAttributes(
      this.revenueRulesRepository,
      user,
      attributes,
    );
  }
}
