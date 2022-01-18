import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { customizationFieldsProviders } from './customization-fields.providers';
import { CustomizationFieldsService } from './customization-fields.service';

describe('CustomizationFieldsService', () => {
  let service: CustomizationFieldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [CustomizationFieldsService, ...customizationFieldsProviders],
    }).compile();

    service = module.get<CustomizationFieldsService>(
      CustomizationFieldsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
