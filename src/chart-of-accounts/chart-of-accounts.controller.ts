import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { ChartOfAccountsService } from './chart-of-accounts.service';
import { CreateChartOfAccountDto } from './dto/create-chart-of-account.dto';
import { UpdateChartOfAccountDto } from './dto/update-chart-of-account.dto';

@Controller('chart-of-accounts')
@ApiExcludeController()
export class ChartOfAccountsController {
  constructor(
    private readonly chartOfAccountsService: ChartOfAccountsService,
  ) {}

  @Post()
  create(
    @Body() createChartOfAccountDto: CreateChartOfAccountDto[],
    @User() userDetail,
  ) {
    const { user, company } = userDetail;
    return this.chartOfAccountsService.create(
      createChartOfAccountDto,
      user,
      company,
    );
  }

  @Get()
  findAll() {
    return this.chartOfAccountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chartOfAccountsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChartOfAccountDto: UpdateChartOfAccountDto,
  ) {
    return this.chartOfAccountsService.update(+id, updateChartOfAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chartOfAccountsService.remove(+id);
  }
}
