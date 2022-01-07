import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';
import { companies, users, accountTypes, billingBatches, billingPeriods, chartOfAccounts, currencies, customizationFields, customizationFormulas, customizations, dropdownTaxonomies, paymentTerms, permissions, retryRules, retrySchedules, revenueRules, roles, rules, templates } from 'src/models';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: process.env.DB_TYPE as Dialect,
        host: process.env.DB_HOST,
        port: Number.parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        pool: {
          min: Number.parseInt(process.env.MIN_DB_CONNECTION),
          max: Number.parseInt(process.env.MAX_DB_CONNECTION),
        }
      });
      sequelize.addModels([
        accountTypes,
        billingBatches,
        billingPeriods,
        chartOfAccounts,
        companies,
        currencies,
        customizationFields,
        customizationFormulas,
        customizations,
        dropdownTaxonomies,
        paymentTerms,
        permissions,
        retryRules,
        retrySchedules,
        revenueRules,
        roles,
        rules,
        templates,
        users,
      ]);
      // await sequelize.sync();
      return sequelize;
    },
  },
];
