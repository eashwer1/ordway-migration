import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { companies, customizations } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateCustomizationDto } from './dto/create-customization.dto';
import { UpdateCustomizationDto } from './dto/update-customization.dto';

@Injectable()
export class CustomizationsService {
  constructor(
    @Inject('CUSTOMIZATIONS_REPOSITORY')
    private customizationsRepository: typeof customizations,
  ) {}
  create(createCustomizationDto: CreateCustomizationDto) {
    return 'This action adds a new customization';
  }

  findAll() {
    return `This action returns all customizations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customization`;
  }

  update(id: number, updateCustomizationDto: UpdateCustomizationDto) {
    return `This action updates a #${id} customization`;
  }

  remove(id: number) {
    return `This action removes a #${id} customization`;
  }

  async findByAttributes(
    company: companies,
    attributes?: string[],
  ): Promise<customizations[]> {
    return await findByAttributes(
      this.customizationsRepository,
      company,
      attributes,
    );
  }
}
