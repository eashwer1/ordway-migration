import { Op } from 'sequelize';
import { companies } from '../../models';
import { findByAttributes } from './find-by-attributes';

describe('findByAttributes', () => {
  it('should query for a proper company id', async () => {
    const mockRepository = {
      findAll: jest.fn((s) => {
        expect(s.where.company_id?.[Op.eq]).toBe(1);

        return 'Success';
      }),
    };
    await findByAttributes(mockRepository, { id: 1 } as companies);
  });

  it('should query with given attributes with camelCase with uuid', async () => {
    const mockRepository = {
      findAll: jest.fn((s) => {
        const expected = [
          ['as_camel', 'asCamel'],
          ['2', '2'],
          ['uuid', 'uuid'],
        ];
        expect(s.attributes).toEqual(expected);
        return 'Success';
      }),
    };
    await findByAttributes(mockRepository, { id: 1 } as companies, [
      'as_camel',
      '2',
    ]);
  });
});
