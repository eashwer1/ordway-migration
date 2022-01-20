import { Controller, Post, Body } from '@nestjs/common';
import { auditLogsAttributes } from 'src/models';
import { User } from '../decorators/user.decorator';
import { AuditLogsService } from './audit-logs.service';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';

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
