import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { roles, rolesAttributes } from '../models';
import { CreateServiceProvider } from '../parents/abstract-service';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService extends CreateServiceProvider<
  roles,
  rolesAttributes
> {
  constructor(
    @Inject('ROLES_REPOSITORY')
    private rolesRepository: typeof roles,
    private eventEmitter: EventEmitter2,
  ) {
    super(rolesRepository, eventEmitter);
  }

  findAll() {
    return `This action returns all roles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
