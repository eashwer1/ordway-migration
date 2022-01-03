import { Test, TestingModule } from '@nestjs/testing';
import { CustomizationFieldsController } from './customization-fields.controller';
import { CustomizationFieldsService } from './customization-fields.service';

describe('CustomizationFieldsController', () => {
  let controller: CustomizationFieldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomizationFieldsController],
      providers: [CustomizationFieldsService],
    }).compile();

    controller = module.get<CustomizationFieldsController>(CustomizationFieldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
