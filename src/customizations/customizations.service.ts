import { Inject, Injectable } from '@nestjs/common';
import { customizations, customizationsAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateCustomizationDto } from './dto/update-customization.dto';

@Injectable()
export class CustomizationsService extends CreateServiceProvider<
  customizations,
  customizationsAttributes
> {
  constructor(
    @Inject('CUSTOMIZATIONS_REPOSITORY')
    private customizationsRepository: typeof customizations,
  ) {
    super(customizationsRepository);
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
}
