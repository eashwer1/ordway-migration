import { Test, TestingModule } from '@nestjs/testing';
import { DropdownTaxonomiesController } from './dropdown-taxonomies.controller';
import { DropdownTaxonomiesService } from './dropdown-taxonomies.service';

describe('DropdownTaxonomiesController', () => {
  let controller: DropdownTaxonomiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DropdownTaxonomiesController],
      providers: [DropdownTaxonomiesService],
    }).compile();

    controller = module.get<DropdownTaxonomiesController>(DropdownTaxonomiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
