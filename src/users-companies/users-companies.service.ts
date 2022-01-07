import { Inject, Injectable } from '@nestjs/common';
import { usersCompanies, usersCompaniesAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateUsersCompanyDto } from './dto/update-users-company.dto';

@Injectable()
export class UsersCompaniesService extends CreateServiceProvider<
  usersCompanies,
  usersCompaniesAttributes
> {
  constructor(
    @Inject('USERS_COMPANIES_REPOSITORY')
    private usersCompaniesRepository: typeof usersCompanies,
  ) {
    super('userId', usersCompaniesRepository);
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
}
