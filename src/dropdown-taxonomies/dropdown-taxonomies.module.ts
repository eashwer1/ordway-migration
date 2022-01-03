import { Module } from '@nestjs/common';
import { DropdownTaxonomiesService } from './dropdown-taxonomies.service';
import { DropdownTaxonomiesController } from './dropdown-taxonomies.controller';
import { dropdownTaxonomiesProviders } from './dropdown-taxonomies.providers';

@Module({
  controllers: [DropdownTaxonomiesController],
  providers: [DropdownTaxonomiesService, ...dropdownTaxonomiesProviders],
  exports: [DropdownTaxonomiesService],
})
export class DropdownTaxonomiesModule {}
