import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { customizationFormulasProviders } from './customization-formulas.providers';
import { CustomizationFormulasService } from './customization-formulas.service';

describe('CustomizationFormulasService', () => {
  let service: CustomizationFormulasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [
        CustomizationFormulasService,
        ...customizationFormulasProviders,
      ],
    }).compile();

    service = module.get<CustomizationFormulasService>(
      CustomizationFormulasService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
