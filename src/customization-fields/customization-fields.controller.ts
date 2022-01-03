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
import { CustomizationFieldsService } from './customization-fields.service';
import { CreateCustomizationFieldDto } from './dto/create-customization-field.dto';
import { UpdateCustomizationFieldDto } from './dto/update-customization-field.dto';

@Controller('customization-fields')
@ApiExcludeController()
export class CustomizationFieldsController {
  constructor(
    private readonly customizationFieldsService: CustomizationFieldsService,
  ) {}

  @Post()
  create(@Body() createCustomizationFieldDto: CreateCustomizationFieldDto) {
    return this.customizationFieldsService.create(createCustomizationFieldDto);
  }

  @Get()
  findAll() {
    return this.customizationFieldsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customizationFieldsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomizationFieldDto: UpdateCustomizationFieldDto,
  ) {
    return this.customizationFieldsService.update(
      +id,
      updateCustomizationFieldDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customizationFieldsService.remove(+id);
  }
}
