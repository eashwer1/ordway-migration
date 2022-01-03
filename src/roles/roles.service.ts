import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { roles } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @Inject('ROLES_REPOSITORY')
    private rolesRepository: typeof roles,
  ) {}
  create(createRoleDto: CreateRoleDto) {
    return 'This action adds a new role';
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

  async findByAttributes(
    user,
    attributes?: string[],
  ): Promise<roles[]> {
    return await findByAttributes(this.rolesRepository, user, attributes);
  }
}
