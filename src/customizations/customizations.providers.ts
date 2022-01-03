import { customizations } from 'src/models';

export const customizationsProviders = [
  {
    provide: 'CUSTOMIZATIONS_REPOSITORY',
    useValue: customizations,
  },
];
