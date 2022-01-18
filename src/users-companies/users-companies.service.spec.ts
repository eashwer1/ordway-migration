import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { usersCompaniesProviders } from './users-companies.providers';
import { UsersCompaniesService } from './users-companies.service';

describe('UsersCompaniesService', () => {
  let service: UsersCompaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      providers: [UsersCompaniesService, ...usersCompaniesProviders],
    }).compile();

    service = module.get<UsersCompaniesService>(UsersCompaniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
