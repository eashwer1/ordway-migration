import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersCompaniesController } from './users-companies.controller';
import { usersCompaniesProviders } from './users-companies.providers';
import { UsersCompaniesService } from './users-companies.service';

describe('UsersCompaniesController', () => {
  let controller: UsersCompaniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EventEmitterModule.forRoot()],
      controllers: [UsersCompaniesController],
      providers: [UsersCompaniesService, ...usersCompaniesProviders],
    }).compile();

    controller = module.get<UsersCompaniesController>(UsersCompaniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
