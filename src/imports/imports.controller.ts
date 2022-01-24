import {
  Controller,
  Post,
  Body,
  BadRequestException,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ImportsService } from './imports.service';
import { CreateImportDto } from './dto/create-import.dto';
import { isEmpty } from 'lodash';
import { User } from '../decorators/user.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Public } from '../decorators/public.decorator';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';

@Controller('config')
export class ImportsController {
  constructor(private readonly importsService: ImportsService) {}

  @Public()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('import')
  import(
    @Body() createImportDto: CreateImportDto,
    @User() user,
    @Req() req: Request,
  ) {
    if (isEmpty(createImportDto)) {
      throw new BadRequestException('import data can not be empty');
    }
    return this.importsService.importConfig(
      createImportDto,
      user.user,
      user.company,
      req,
    );
  }
}
