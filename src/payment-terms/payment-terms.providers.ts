import { paymentTerms } from 'src/models';

export const paymentTermsProviders = [
  {
    provide: 'PAYMENT_TERMS_REPOSITORY',
    useValue: paymentTerms,
  },
];
