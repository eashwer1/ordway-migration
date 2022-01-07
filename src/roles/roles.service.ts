import { Inject, Injectable } from '@nestjs/common';
import { roles, rolesAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService extends CreateServiceProvider<
  roles,
  rolesAttributes
> {
  constructor(
    @Inject('ROLES_REPOSITORY')
    private rolesRepository: typeof roles,
  ) {
    super('name', rolesRepository);
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
