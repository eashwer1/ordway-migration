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
import { CustomizationsService } from './customizations.service';
import { CreateCustomizationDto } from './dto/create-customization.dto';
import { UpdateCustomizationDto } from './dto/update-customization.dto';

@Controller('customizations')
@ApiExcludeController()
export class CustomizationsController {
  constructor(private readonly customizationsService: CustomizationsService) {}

  @Post()
  create(
    @Body() createCustomizationDto: CreateCustomizationDto[],
    @User() userDetail,
  ) {
    const { user, company } = userDetail;
    return this.customizationsService.create(
      createCustomizationDto,
      user,
      company,
    );
  }

  @Get()
  findAll() {
    return this.customizationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customizationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomizationDto: UpdateCustomizationDto,
  ) {
    return this.customizationsService.update(+id, updateCustomizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customizationsService.remove(+id);
  }
}
