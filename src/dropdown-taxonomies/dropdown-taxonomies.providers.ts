import { dropdownTaxonomies } from 'src/models';

export const dropdownTaxonomiesProviders = [
  {
    provide: 'DROPDOWN_TAXONOMIES_REPOSITORY',
    useValue: dropdownTaxonomies,
  },
];
