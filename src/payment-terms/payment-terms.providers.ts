import { paymentTerms } from '../models';

export const paymentTermsProviders = [
  {
    provide: 'PAYMENT_TERMS_REPOSITORY',
    useValue: paymentTerms,
  },
];
