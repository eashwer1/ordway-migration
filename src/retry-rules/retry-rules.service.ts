import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { retryRules } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateRetryRuleDto } from './dto/create-retry-rule.dto';
import { UpdateRetryRuleDto } from './dto/update-retry-rule.dto';

@Injectable()
export class RetryRulesService {
  constructor(
    @Inject('RETRY_RULES_REPOSITORY')
    private retryRulesRepository: typeof retryRules,
  ) {}
  create(createRetryRuleDto: CreateRetryRuleDto) {
    return 'This action adds a new retryRule';
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

  async findByAttributes(
    user,
    attributes?: string[],
  ): Promise<retryRules[]> {
    return await findByAttributes(this.retryRulesRepository, user, attributes);
  }
}
