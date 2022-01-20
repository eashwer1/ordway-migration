import { Inject, Injectable } from '@nestjs/common';
import { auditLogs, auditLogsAttributes } from '../models';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';

@Injectable()
export class AuditLogsService {
  constructor(
    @Inject('AUDIT_LOGS_REPOSITORY')
    private auditLogsRepository: typeof auditLogs,
  ) {}

  async create(createAuditLogDto: CreateAuditLogDto[]): Promise<void> {
    const columns = Object.keys(
      createAuditLogDto?.[0] ?? {},
    ) as (keyof auditLogsAttributes)[];
    if (createAuditLogDto.length > 1) {
      await this.auditLogsRepository.bulkCreate(createAuditLogDto, {
        fields: columns,
        returning: false,
      });
    } else {
      createAuditLogDto.length === 1 &&
        (await this.auditLogsRepository.create(createAuditLogDto?.[0], {
          fields: columns,
          returning: false,
        }));
    }
  }
}
