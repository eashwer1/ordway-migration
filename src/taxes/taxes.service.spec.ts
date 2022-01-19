import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { taxesProviders } from './taxes.providers';
import { TaxesService } from './taxes.service';

describe('TaxesService', () => {
  let service: TaxesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [TaxesService, ...taxesProviders],
    }).compile();

    service = module.get<TaxesService>(TaxesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
