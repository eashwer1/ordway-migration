import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { isEmpty } from 'class-validator';
import { Request } from 'express';
import { merge } from 'lodash';
import { FindOptions, Op } from 'sequelize';
import { companies, companiesAttributes, users } from '../models';
import { CreateServiceProvider } from '../parents/abstract-service';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService extends CreateServiceProvider<
  companies,
  companiesAttributes
> {
  constructor(
    @Inject('COMPANIES_REPOSITORY')
    private companiesRepository: typeof companies,
    private eventEmitter: EventEmitter2,
  ) {
    super(companiesRepository, eventEmitter);
  }

  async importCompanySettings(
    tablesWithData: companiesAttributes,
    company: companies,
    req: Request,
  ) {
    tablesWithData.updatedAt = new Date();
    const existingCompany = await this.findCompanyById(company.id);
    tablesWithData = merge((existingCompany as any).dataValue, tablesWithData);
    const [_, updated] = await this.companiesRepository.update(tablesWithData, {
      where: { id: { [Op.eq]: company.id } },
      returning: true,
    });
    this.createAuditLogEvent([{ id: updated[0].id, ...tablesWithData }], req, {
      action: 'edit',
    });

    return updated[0];
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
