import { Test, TestingModule } from '@nestjs/testing';
import { UsersCompaniesController } from './users-companies.controller';
import { UsersCompaniesService } from './users-companies.service';

describe('UsersCompaniesController', () => {
  let controller: UsersCompaniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersCompaniesController],
      providers: [UsersCompaniesService],
    }).compile();

    controller = module.get<UsersCompaniesController>(UsersCompaniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
