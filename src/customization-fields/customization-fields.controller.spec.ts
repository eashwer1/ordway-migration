import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { CustomizationFieldsController } from './customization-fields.controller';
import { customizationFieldsProviders } from './customization-fields.providers';
import { CustomizationFieldsService } from './customization-fields.service';

describe('CustomizationFieldsController', () => {
  let controller: CustomizationFieldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [CustomizationFieldsController],
      providers: [CustomizationFieldsService, ...customizationFieldsProviders],
    }).compile();

    controller = module.get<CustomizationFieldsController>(
      CustomizationFieldsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
