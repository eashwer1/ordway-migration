import { Controller, Post, Body } from '@nestjs/common';
import { User } from '../decorators/user.decorator';
import { AuditLogsService } from './audit-logs.service';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';

@Controller('audit-logs')
export class AuditLogsController {
  constructor(private readonly auditLogsService: AuditLogsService) {}

  @Post()
  create(@Body() createAuditLogDto: CreateAuditLogDto, @User() userDetail) {
    const { user, company } = userDetail;
    return this.auditLogsService.create(createAuditLogDto, user, company);
  }
}
