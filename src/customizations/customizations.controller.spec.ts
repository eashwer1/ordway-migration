import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { CustomizationsController } from './customizations.controller';
import { customizationsProviders } from './customizations.providers';
import { CustomizationsService } from './customizations.service';

describe('CustomizationsController', () => {
  let controller: CustomizationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [CustomizationsController],
      providers: [CustomizationsService, ...customizationsProviders],
    }).compile();

    controller = module.get<CustomizationsController>(CustomizationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
