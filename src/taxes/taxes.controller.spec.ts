import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { TaxesController } from './taxes.controller';
import { taxesProviders } from './taxes.providers';
import { TaxesService } from './taxes.service';

describe('TaxesController', () => {
  let controller: TaxesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [TaxesController],
      providers: [TaxesService, ...taxesProviders],
    }).compile();

    controller = module.get<TaxesController>(TaxesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
