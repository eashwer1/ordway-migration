import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  UseGuards,
  Response,
  StreamableFile,
} from '@nestjs/common';
import { ExportsService } from './exports.service';
import { GetConfigDto } from './dto/get-configs.dto';
import getMetadata from '../utils/metadata/read-metadata';
import { isEmpty, join } from 'lodash';
import ConfigMetadata from '../interfaces/metadata.interfaces';
import { ApiBearerAuth } from '@nestjs/swagger';
import { User } from '../decorators/user.decorator';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { createReadStream, writeFileSync } from 'fs';

@Controller('config')
export class ExportsController {
  constructor(private readonly exportsService: ExportsService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('export')
  async create(
    @Body() getConfigDto: GetConfigDto,
    @User() reqUser,
    @Response({ passthrough: true }) res,
  ) {
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

    writeFileSync('response.json', JSON.stringify(response), {
      encoding: 'utf8',
      flag: 'w',
    });
    const file = createReadStream('response.json');
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="response.json"',
    });
    return new StreamableFile(file);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('export')
  async findAll(@User() reqUser, @Response({ passthrough: true }) res) {
    const user = reqUser.user;
    const company = reqUser.company;
    const requestedConfig: ConfigMetadata = await getMetadata(user, company);
    const response = await this.exportsService.getConfigForExport(
      requestedConfig,
      user,
      company,
    );
    writeFileSync('response.json', JSON.stringify(response), {
      encoding: 'utf8',
    });
    const file = createReadStream('response.json');
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="response.json',
    });
    return new StreamableFile(file);
  }
}
