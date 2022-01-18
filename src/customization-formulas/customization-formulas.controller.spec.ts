import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { CustomizationFormulasController } from './customization-formulas.controller';
import { customizationFormulasProviders } from './customization-formulas.providers';
import { CustomizationFormulasService } from './customization-formulas.service';

describe('CustomizationFormulasController', () => {
  let controller: CustomizationFormulasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [CustomizationFormulasController],
      providers: [
        CustomizationFormulasService,
        ...customizationFormulasProviders,
      ],
    }).compile();

    controller = module.get<CustomizationFormulasController>(
      CustomizationFormulasController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
