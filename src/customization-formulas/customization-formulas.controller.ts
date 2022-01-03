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
  create(@Body() createCustomizationFormulaDto: CreateCustomizationFormulaDto) {
    return this.customizationFormulasService.create(
      createCustomizationFormulaDto,
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
