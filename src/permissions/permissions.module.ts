import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { permissionsProviders } from './permissions.providers';

@Module({
  controllers: [PermissionsController],
  providers: [PermissionsService, ...permissionsProviders],
  exports: [PermissionsService],
})
export class PermissionsModule {}
