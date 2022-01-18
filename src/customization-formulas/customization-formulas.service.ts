import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import {
  customizationFormulas,
  customizationFormulasAttributes,
} from '../models';
import { CreateServiceProvider } from '../parents/abstract-service';
import { UpdateCustomizationFormulaDto } from './dto/update-customization-formula.dto';

@Injectable()
export class CustomizationFormulasService extends CreateServiceProvider<
  customizationFormulas,
  customizationFormulasAttributes
> {
  constructor(
    @Inject('CUSTOMIZATION_FORMULAS_REPOSITORY')
    private customizationFormulasRepository,
    private eventEmitter: EventEmitter2,
  ) {
    super(customizationFormulasRepository, eventEmitter);
  }

  findAll() {
    return `This action returns all customizationFormulas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customizationFormula`;
  }

  update(
    id: number,
    updateCustomizationFormulaDto: UpdateCustomizationFormulaDto,
  ) {
    return `This action updates a #${id} customizationFormula`;
  }

  remove(id: number) {
    return `This action removes a #${id} customizationFormula`;
  }
}
