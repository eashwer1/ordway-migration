import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { companies, dropdownTaxonomies } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateDropdownTaxonomyDto } from './dto/create-dropdown-taxonomy.dto';
import { UpdateDropdownTaxonomyDto } from './dto/update-dropdown-taxonomy.dto';

@Injectable()
export class DropdownTaxonomiesService {
  constructor(
    @Inject('DROPDOWN_TAXONOMIES_REPOSITORY')
    private dropdownTaxonomiesRepository: typeof dropdownTaxonomies,
  ) {}
  create(createDropdownTaxonomyDto: CreateDropdownTaxonomyDto) {
    return 'This action adds a new dropdownTaxonomy';
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

  async findByAttributes(
    company: companies,
    attributes?: string[],
  ): Promise<dropdownTaxonomies[]> {
    return await findByAttributes(
      this.dropdownTaxonomiesRepository,
      company,
      attributes,
    );
  }
}
