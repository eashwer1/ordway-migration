import { customizationFormulas } from '../models';

export const customizationFormulasProviders = [
  {
    provide: 'CUSTOMIZATION_FORMULAS_REPOSITORY',
    useValue: customizationFormulas,
  },
];
