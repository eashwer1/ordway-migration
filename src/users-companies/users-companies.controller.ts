import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersCompaniesService } from './users-companies.service';
import { CreateUsersCompanyDto } from './dto/create-users-company.dto';
import { UpdateUsersCompanyDto } from './dto/update-users-company.dto';
import { ApiExcludeController } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';

@Controller('users-companies')
@ApiExcludeController()
export class UsersCompaniesController {
  constructor(private readonly usersCompaniesService: UsersCompaniesService) {}

  @Post()
  create(
    @Body() createUsersCompanyDto: CreateUsersCompanyDto[],
    @User() userDetail,
  ) {
    const { user, company } = userDetail;
    return this.usersCompaniesService.create(
      createUsersCompanyDto,
      user,
      company,
    );
  }

  @Get()
  findAll() {
    return this.usersCompaniesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersCompaniesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsersCompanyDto: UpdateUsersCompanyDto,
  ) {
    return this.usersCompaniesService.update(+id, updateUsersCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersCompaniesService.remove(+id);
  }
}
