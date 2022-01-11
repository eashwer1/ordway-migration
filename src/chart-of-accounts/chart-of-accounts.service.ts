import { Inject, Injectable } from '@nestjs/common';
import { chartOfAccounts, chartOfAccountsAttributes } from 'src/models';
import { CreateServiceProvider } from 'src/parents/abstract-service';
import { UpdateChartOfAccountDto } from './dto/update-chart-of-account.dto';

@Injectable()
export class ChartOfAccountsService extends CreateServiceProvider<
  chartOfAccounts,
  chartOfAccountsAttributes
> {
  constructor(
    @Inject('CHART_OF_ACCOUNTS_REPOSITORY')
    private chartOfAccountsRepository: typeof chartOfAccounts,
  ) {
    super(chartOfAccountsRepository);
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
}
