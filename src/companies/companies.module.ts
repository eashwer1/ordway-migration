import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { companiesProviders } from './companies.providers';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService, ...companiesProviders],
  exports: [CompaniesService],
})
export class CompaniesModule {}
