import { Test, TestingModule } from '@nestjs/testing';
import { CustomizationFormulasService } from './customization-formulas.service';

describe('CustomizationFormulasService', () => {
  let service: CustomizationFormulasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomizationFormulasService],
    }).compile();

    service = module.get<CustomizationFormulasService>(CustomizationFormulasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
