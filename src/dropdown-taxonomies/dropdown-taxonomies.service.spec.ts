import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { dropdownTaxonomiesProviders } from './dropdown-taxonomies.providers';
import { DropdownTaxonomiesService } from './dropdown-taxonomies.service';

describe('DropdownTaxonomiesService', () => {
  let service: DropdownTaxonomiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [DropdownTaxonomiesService, ...dropdownTaxonomiesProviders],
    }).compile();

    service = module.get<DropdownTaxonomiesService>(DropdownTaxonomiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
