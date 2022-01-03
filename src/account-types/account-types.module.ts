import { Module } from '@nestjs/common';
import { AccountTypesService } from './account-types.service';
import { AccountTypesController } from './account-types.controller';
import { accountTypesProviders } from './account-types.providers';

@Module({
  controllers: [AccountTypesController],
  providers: [AccountTypesService, ...accountTypesProviders],
  exports: [AccountTypesService],
})
export class AccountTypesModule {}
