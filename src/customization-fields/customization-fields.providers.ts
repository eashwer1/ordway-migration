import { customizationFields } from '../models';

export const customizationFieldsProviders = [
  {
    provide: 'CUSTOMIZATION_FIELDS_REPOSITORY',
    useValue: customizationFields,
  },
];
