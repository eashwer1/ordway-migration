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
import { DropdownTaxonomiesService } from './dropdown-taxonomies.service';
import { CreateDropdownTaxonomyDto } from './dto/create-dropdown-taxonomy.dto';
import { UpdateDropdownTaxonomyDto } from './dto/update-dropdown-taxonomy.dto';

@Controller('dropdown-taxonomies')
@ApiExcludeController()
export class DropdownTaxonomiesController {
  constructor(
    private readonly dropdownTaxonomiesService: DropdownTaxonomiesService,
  ) {}

  @Post()
  create(
    @Body() createDropdownTaxonomyDto: CreateDropdownTaxonomyDto[],
    @User() userDetail,
  ) {
    const { user, company } = userDetail;
    return this.dropdownTaxonomiesService.create(
      createDropdownTaxonomyDto,
      user,
      company,
    );
  }

  @Get()
  findAll() {
    return this.dropdownTaxonomiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dropdownTaxonomiesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDropdownTaxonomyDto: UpdateDropdownTaxonomyDto,
  ) {
    return this.dropdownTaxonomiesService.update(
      +id,
      updateDropdownTaxonomyDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dropdownTaxonomiesService.remove(+id);
  }
}
