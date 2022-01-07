import { Inject, Injectable } from '@nestjs/common';
import { isEmpty } from 'class-validator';
import { FindOptions, Op } from 'sequelize';
import { companies, companiesAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService extends CreateServiceProvider<
  companies,
  companiesAttributes
> {
  constructor(
    @Inject('COMPANIES_REPOSITORY')
    private companiesRepository: typeof companies,
  ) {
    super('uuid', companiesRepository);
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
