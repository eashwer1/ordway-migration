import { Test, TestingModule } from '@nestjs/testing';
import { CustomizationFieldsService } from './customization-fields.service';

describe('CustomizationFieldsService', () => {
  let service: CustomizationFieldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomizationFieldsService],
    }).compile();

    service = module.get<CustomizationFieldsService>(CustomizationFieldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
