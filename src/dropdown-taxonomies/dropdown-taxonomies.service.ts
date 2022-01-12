import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { dropdownTaxonomies, dropdownTaxonomiesAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateDropdownTaxonomyDto } from './dto/update-dropdown-taxonomy.dto';

@Injectable()
export class DropdownTaxonomiesService extends CreateServiceProvider<
  dropdownTaxonomies,
  dropdownTaxonomiesAttributes
> {
  constructor(
    @Inject('DROPDOWN_TAXONOMIES_REPOSITORY')
    private dropdownTaxonomiesRepository: typeof dropdownTaxonomies,
    private eventEmitter: EventEmitter2,
  ) {
    super(dropdownTaxonomiesRepository, eventEmitter);
  }

  findAll() {
    return `This action returns all dropdownTaxonomies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dropdownTaxonomy`;
  }

  update(id: number, updateDropdownTaxonomyDto: UpdateDropdownTaxonomyDto) {
    return `This action updates a #${id} dropdownTaxonomy`;
  }

  remove(id: number) {
    return `This action removes a #${id} dropdownTaxonomy`;
  }
}
