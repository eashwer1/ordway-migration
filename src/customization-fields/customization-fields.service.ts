import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { companies, customizationFields } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateCustomizationFieldDto } from './dto/create-customization-field.dto';
import { UpdateCustomizationFieldDto } from './dto/update-customization-field.dto';

@Injectable()
export class CustomizationFieldsService {
  constructor(
    @Inject('CUSTOMIZATION_FIELDS_REPOSITORY')
    private customizationFieldsRepository,
  ) {}
  create(createCustomizationFieldDto: CreateCustomizationFieldDto) {
    return 'This action adds a new customizationField';
  }

  findAll() {
    return `This action returns all customizationFields`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customizationField`;
  }

  update(id: number, updateCustomizationFieldDto: UpdateCustomizationFieldDto) {
    return `This action updates a #${id} customizationField`;
  }

  remove(id: number) {
    return `This action removes a #${id} customizationField`;
  }

  async findByAttributes(
    company: companies,
    attributes?: string[],
  ): Promise<customizationFields[]> {
    return await findByAttributes(
      this.customizationFieldsRepository,
      company,
      attributes,
    );
  }
}
