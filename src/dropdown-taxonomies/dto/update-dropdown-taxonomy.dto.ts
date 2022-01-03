import { PartialType } from '@nestjs/swagger';
import { CreateDropdownTaxonomyDto } from './create-dropdown-taxonomy.dto';

export class UpdateDropdownTaxonomyDto extends PartialType(CreateDropdownTaxonomyDto) {}
