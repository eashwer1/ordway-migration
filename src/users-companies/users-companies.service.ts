import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { usersCompanies } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateUsersCompanyDto } from './dto/create-users-company.dto';
import { UpdateUsersCompanyDto } from './dto/update-users-company.dto';

@Injectable()
export class UsersCompaniesService {
  constructor(
    @Inject('USERS_COMPANIES_REPOSITORY')
    private usersCompaniesRepository: typeof usersCompanies,
  ) {}

  create(createUsersCompanyDto: CreateUsersCompanyDto) {
    return 'This action adds a new usersCompany';
  }

  findAll() {
    return `This action returns all usersCompanies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersCompany`;
  }

  update(id: number, updateUsersCompanyDto: UpdateUsersCompanyDto) {
    return `This action updates a #${id} usersCompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersCompany`;
  }

  async findByAttributes(
    user,
    attributes?: string[],
  ): Promise<usersCompanies[]> {
    return await findByAttributes(
      this.usersCompaniesRepository,
      user,
      attributes,
    );
  }
}
