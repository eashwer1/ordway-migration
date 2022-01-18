import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { customizationsProviders } from './customizations.providers';
import { CustomizationsService } from './customizations.service';

describe('CustomizationsService', () => {
  let service: CustomizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [CustomizationsService, ...customizationsProviders],
    }).compile();

    service = module.get<CustomizationsService>(CustomizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
