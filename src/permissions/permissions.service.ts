import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { permissions } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionsService {
  constructor(
    @Inject('PERMISSIONS_REPOSITORY')
    private permissionsRepository: typeof permissions,
  ) {}
  create(createPermissionDto: CreatePermissionDto) {
    return 'This action adds a new permission';
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

  async findByAttributes(
    user,
    attributes?: string[],
  ): Promise<permissions[]> {
    return await findByAttributes(this.permissionsRepository, user, attributes);
  }
}
