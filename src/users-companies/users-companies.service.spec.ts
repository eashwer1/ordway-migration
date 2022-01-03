import { Test, TestingModule } from '@nestjs/testing';
import { UsersCompaniesService } from './users-companies.service';

describe('UsersCompaniesService', () => {
  let service: UsersCompaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersCompaniesService],
    }).compile();

    service = module.get<UsersCompaniesService>(UsersCompaniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
