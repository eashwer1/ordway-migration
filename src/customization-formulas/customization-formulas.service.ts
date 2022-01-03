import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { companies, customizationFormulas } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateCustomizationFormulaDto } from './dto/create-customization-formula.dto';
import { UpdateCustomizationFormulaDto } from './dto/update-customization-formula.dto';

@Injectable()
export class CustomizationFormulasService {
  constructor(
    @Inject('CUSTOMIZATION_FORMULAS_REPOSITORY')
    private customizationFormulasRepository,
  ) {}
  create(createCustomizationFormulaDto: CreateCustomizationFormulaDto) {
    return 'This action adds a new customizationFormula';
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

  async findByAttributes(
    company: companies,
    attributes?: string[],
  ): Promise<customizationFormulas[]> {
    return await findByAttributes(
      this.customizationFormulasRepository,
      company,
      attributes,
    );
  }
}
