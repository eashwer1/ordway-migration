import { Module } from '@nestjs/common';
import { UsersCompaniesService } from './users-companies.service';
import { UsersCompaniesController } from './users-companies.controller';
import { usersCompaniesProviders } from './users-companies.providers';

@Module({
  controllers: [UsersCompaniesController],
  providers: [UsersCompaniesService, ...usersCompaniesProviders],
  exports: [UsersCompaniesService],
})
export class UsersCompaniesModule {}
