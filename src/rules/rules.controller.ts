import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RulesService } from './rules.service';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { ApiExcludeController } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';

@Controller('rules')
@ApiExcludeController()
export class RulesController {
  constructor(private readonly rulesService: RulesService) {}

  @Post()
  create(@Body() createRuleDto: CreateRuleDto[], @User() userDetail) {
    const { user, company } = userDetail;
    return this.rulesService.create(createRuleDto, user, company);
  }

  @Get()
  findAll() {
    return this.rulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRuleDto: UpdateRuleDto) {
    return this.rulesService.update(+id, updateRuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rulesService.remove(+id);
  }
}
