import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { ExportsService } from './exports.service';
import { GetConfigDto } from './dto/get-configs.dto';
import { Request } from 'express';
import { companies, users } from 'src/models';
import getMetadata from 'src/utils/metadata/read-metadata';
import { isEmpty } from 'lodash';
import ConfigMetadata from '../interfaces/metadata.interfaces';
import { ApiBearerAuth } from '@nestjs/swagger';
import { User } from 'src/decorators/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@Controller('config')
export class ExportsController {
  constructor(private readonly exportsService: ExportsService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('export')
  async create(@Body() getConfigDto: GetConfigDto, @User() reqUser) {
    const user = reqUser.user;
    const company = reqUser.company;
    const requestedConfig: ConfigMetadata = isEmpty(getConfigDto)
      ? await getMetadata(user, company)
      : getConfigDto;

    const response = await this.exportsService.getConfigForExport(
      requestedConfig,
      user,
      company,
    );
    return JSON.parse(JSON.stringify(response));
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('export')
  async findAll(@User() reqUser) {
    const user = reqUser.user;
    const company = reqUser.company;
    const requestedConfig: ConfigMetadata = await getMetadata(user, company);
    const response = await this.exportsService.getConfigForExport(
      requestedConfig,
      user,
      company,
    );
    return response;
  }
}
