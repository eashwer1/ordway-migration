import { Test, TestingModule } from '@nestjs/testing';
import { DropdownTaxonomiesService } from './dropdown-taxonomies.service';

describe('DropdownTaxonomiesService', () => {
  let service: DropdownTaxonomiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DropdownTaxonomiesService],
    }).compile();

    service = module.get<DropdownTaxonomiesService>(DropdownTaxonomiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
