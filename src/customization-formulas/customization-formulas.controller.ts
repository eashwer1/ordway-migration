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
import { User } from '../decorators/user.decorator';
import { CustomizationFormulasService } from './customization-formulas.service';
import { CreateCustomizationFormulaDto } from './dto/create-customization-formula.dto';
import { UpdateCustomizationFormulaDto } from './dto/update-customization-formula.dto';

@Controller('customization-formulas')
@ApiExcludeController()
export class CustomizationFormulasController {
  constructor(
    private readonly customizationFormulasService: CustomizationFormulasService,
  ) {}

  @Post()
  create(
    @Body() createCustomizationFormulaDto: CreateCustomizationFormulaDto[],
    @User() userDetail,
  ) {
    const { user, company } = userDetail;
    return this.customizationFormulasService.create(
      createCustomizationFormulaDto,
      user,
      company,
    );
  }

  @Get()
  findAll() {
    return this.customizationFormulasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customizationFormulasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomizationFormulaDto: UpdateCustomizationFormulaDto,
  ) {
    return this.customizationFormulasService.update(
      +id,
      updateCustomizationFormulaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customizationFormulasService.remove(+id);
  }
}
