import { HttpException, Inject, Injectable } from '@nestjs/common';
import { isEmpty } from 'class-validator';
import { FindOptions, Op } from 'sequelize';
import { companies } from 'src/models';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @Inject('COMPANIES_REPOSITORY')
    private companiesRepository: typeof companies,
  ) {}
  create(createCompanyDto: CreateCompanyDto) {
    return 'This action adds a new company';
  }

  findAll() {
    return `This action returns all companies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }

  public async findCompanies(
    companyId: number,
    attributes: string[],
  ): Promise<companies> {
    let findParams: FindOptions = { where: { id: { [Op.eq]: companyId } } };
    if (!isEmpty(attributes)) {
      findParams = { attributes, ...findParams };
    }
    const company = await this.companiesRepository.findOne(findParams);
    return company;
  }

  public async findCompanyById(companyId: number): Promise<companies> {
    const company: companies = await this.companiesRepository.findByPk(
      companyId,
    );
    return company;
  }
}
