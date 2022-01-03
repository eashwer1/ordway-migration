import { Test, TestingModule } from '@nestjs/testing';
import { CustomizationFormulasController } from './customization-formulas.controller';
import { CustomizationFormulasService } from './customization-formulas.service';

describe('CustomizationFormulasController', () => {
  let controller: CustomizationFormulasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomizationFormulasController],
      providers: [CustomizationFormulasService],
    }).compile();

    controller = module.get<CustomizationFormulasController>(CustomizationFormulasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
