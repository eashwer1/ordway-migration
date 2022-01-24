import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { auditLogsAttributes } from '../models';
import { User } from '../decorators/user.decorator';
import { AuditLogsService } from './audit-logs.service';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';

@ApiExcludeController()
@UseGuards(JwtAuthGuard)
@Controller('audit-logs')
export class AuditLogsController {
  constructor(private readonly auditLogsService: AuditLogsService) {}

  @Post()
  create(@Body() createAuditLogDto: CreateAuditLogDto, @User() userDetail) {
    const { user, company } = userDetail;
    const data: auditLogsAttributes = {
      userId: user.id,
      companyId: company.id,
      createdAt: new Date(),
      ...createAuditLogDto,
    };
    return this.auditLogsService.create([data]);
  }
}
