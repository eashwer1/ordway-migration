import { getAllMetadataFields, getMetadataTableNames } from './read-metadata';
import axios from 'axios';
import { companies, users } from '../../models';

jest.mock('axios');

const metadata = {
  data: {
    account_types: {
      fields: [
        {
          name: 'account_type',
          display_name: 'Account Type',
          definition: {
            object_name: 'account_type',
            attribute_name: ['account_type', 'sub_types'],
            filter: {
              category_type: 'uom',
            },
          },
        },
      ],
      version: 1,
    },
    billing_batches: {
      fields: [
        {
          name: 'billing_batches',
          display_name: 'Billing Batches',
          definition: {
            object_name: 'billing_batch',
            attribute_name: ['batch', 'template_id'],
          },
        },
      ],
      version: 1,
    },
  },
};

describe('findByAttributes', () => {
  describe('getAllMetadataFields', () => {
    it('should return all the config fields', async () => {
      axios.get = jest.fn().mockResolvedValue(metadata);

      const fields = await getAllMetadataFields({} as users, {} as companies);

      expect(fields.length).toBe(2);
    });
  });

  describe('getMetadataTableNames', () => {
    it('should return all table names', async () => {
      axios.get = jest.fn().mockResolvedValue(metadata);

      const names = await getMetadataTableNames({} as users, {} as companies);
      expect(names).toEqual(['account_types', 'billing_batches']);
    });

    it('should return empty with an error when no config metadata', async () => {
      axios.get = jest.fn().mockResolvedValue(undefined);

      const names = await getMetadataTableNames({} as users, {} as companies);
      expect(names).toEqual([]);
    });
  });
});
