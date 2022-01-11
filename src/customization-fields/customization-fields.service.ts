import { Inject, Injectable } from '@nestjs/common';
import { customizationFields, customizationFieldsAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateCustomizationFieldDto } from './dto/update-customization-field.dto';

@Injectable()
export class CustomizationFieldsService extends CreateServiceProvider<
  customizationFields,
  customizationFieldsAttributes
> {
  constructor(
    @Inject('CUSTOMIZATION_FIELDS_REPOSITORY')
    private customizationFieldsRepository,
  ) {
    super(customizationFieldsRepository);
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
}
