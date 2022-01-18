import { templates } from '../models';

export const templatesProviders = [
  {
    provide: 'TEMPLATES_REPOSITORY',
    useValue: templates,
  },
];
