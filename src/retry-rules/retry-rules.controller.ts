import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RetryRulesService } from './retry-rules.service';
import { CreateRetryRuleDto } from './dto/create-retry-rule.dto';
import { UpdateRetryRuleDto } from './dto/update-retry-rule.dto';
import { ApiExcludeController } from '@nestjs/swagger';
import { User } from '../decorators/user.decorator';

@Controller('retry-rules')
@ApiExcludeController()
export class RetryRulesController {
  constructor(private readonly retryRulesService: RetryRulesService) {}

  @Post()
  create(@Body() createRetryRuleDto: CreateRetryRuleDto[], @User() userDetail) {
    const { user, company } = userDetail;
    return this.retryRulesService.create(createRetryRuleDto, user, company);
  }

  @Get()
  findAll() {
    return this.retryRulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.retryRulesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRetryRuleDto: UpdateRetryRuleDto,
  ) {
    return this.retryRulesService.update(+id, updateRetryRuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.retryRulesService.remove(+id);
  }
}
