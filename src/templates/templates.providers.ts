import { templates } from 'src/models';

export const templatesProviders = [
  {
    provide: 'TEMPLATES_REPOSITORY',
    useValue: templates,
  },
];
