import {
  Controller,
  Post,
  Body,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { ImportsService } from './imports.service';
import { CreateImportDto } from './dto/create-import.dto';
import { isEmpty } from 'lodash';
import { User } from 'src/decorators/user.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('imports')
export class ImportsController {
  constructor(private readonly importsService: ImportsService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  import(@Body() createImportDto: CreateImportDto, @User() user) {
    if (isEmpty(createImportDto)) {
      throw new BadRequestException('import data can not be empty');
    }
    return this.importsService.importConfig(
      createImportDto,
      user.user,
      user.company,
    );
  }
}
