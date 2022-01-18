import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { DropdownTaxonomiesController } from './dropdown-taxonomies.controller';
import { dropdownTaxonomiesProviders } from './dropdown-taxonomies.providers';
import { DropdownTaxonomiesService } from './dropdown-taxonomies.service';

describe('DropdownTaxonomiesController', () => {
  let controller: DropdownTaxonomiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [DropdownTaxonomiesController],
      providers: [DropdownTaxonomiesService, ...dropdownTaxonomiesProviders],
    }).compile();

    controller = module.get<DropdownTaxonomiesController>(
      DropdownTaxonomiesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
