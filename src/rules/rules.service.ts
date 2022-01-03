import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { rules } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';

@Injectable()
export class RulesService {
  constructor(
    @Inject('RULES_REPOSITORY')
    private rulesRepository: typeof rules,
  ) {}
  create(createRuleDto: CreateRuleDto) {
    return 'This action adds a new rule';
  }

  findAll() {
    return `This action returns all rules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rule`;
  }

  update(id: number, updateRuleDto: UpdateRuleDto) {
    return `This action updates a #${id} rule`;
  }

  remove(id: number) {
    return `This action removes a #${id} rule`;
  }

  async findByAttributes(
    user,
    attributes?: string[],
  ): Promise<rules[]> {
    return await findByAttributes(this.rulesRepository, user, attributes);
  }
}
