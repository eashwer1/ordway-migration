import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
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
    private eventEmitter: EventEmitter2,
  ) {
    super(rulesRepository, eventEmitter);
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
