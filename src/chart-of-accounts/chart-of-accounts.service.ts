import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { chartOfAccounts, companies } from 'src/models';
import { findByAttributes } from 'src/utils/queries/find-by-attributes';
import { CreateChartOfAccountDto } from './dto/create-chart-of-account.dto';
import { UpdateChartOfAccountDto } from './dto/update-chart-of-account.dto';

@Injectable()
export class ChartOfAccountsService {
  constructor(
    @Inject('CHART_OF_ACCOUNTS_REPOSITORY')
    private chartOfAccountsRepository: typeof chartOfAccounts,
  ) {}
  create(createChartOfAccountDto: CreateChartOfAccountDto) {
    return 'This action adds a new chartOfAccount';
  }

  findAll() {
    return `This action returns all chartOfAccounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chartOfAccount`;
  }

  update(id: number, updateChartOfAccountDto: UpdateChartOfAccountDto) {
    return `This action updates a #${id} chartOfAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} chartOfAccount`;
  }

  async findByAttributes(
    company: companies,
    attributes?: string[],
  ): Promise<chartOfAccounts[]> {
    return await findByAttributes(
      this.chartOfAccountsRepository,
      company,
      attributes,
    );
  }
}
