import { Inject, Injectable } from '@nestjs/common';
import { rules, rulesAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateRuleDto } from './dto/update-rule.dto';

@Injectable()
export class RulesService extends CreateServiceProvider<
  rules,
  rulesAttributes
> {
  constructor(
    @Inject('RULES_REPOSITORY')
    private rulesRepository: typeof rules,
  ) {
    super(rulesRepository);
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
}
