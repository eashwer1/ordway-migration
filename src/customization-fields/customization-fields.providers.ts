import { customizationFields } from 'src/models';

export const customizationFieldsProviders = [
  {
    provide: 'CUSTOMIZATION_FIELDS_REPOSITORY',
    useValue: customizationFields,
  },
];
