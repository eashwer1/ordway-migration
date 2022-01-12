import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { permissions, permissionsAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionsService extends CreateServiceProvider<
  permissions,
  permissionsAttributes
> {
  constructor(
    @Inject('PERMISSIONS_REPOSITORY')
    private permissionsRepository: typeof permissions,
    private eventEmitter: EventEmitter2,
  ) {
    super(permissionsRepository, eventEmitter);
  }

  findAll() {
    return `This action returns all permissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`;
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} permission`;
  }

  remove(id: number) {
    return `This action removes a #${id} permission`;
  }
}
