import { customizations } from '../models';

export const customizationsProviders = [
  {
    provide: 'CUSTOMIZATIONS_REPOSITORY',
    useValue: customizations,
  },
];
