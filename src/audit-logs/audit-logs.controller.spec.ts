import { Test, TestingModule } from '@nestjs/testing';
import { AuditLogsController } from './audit-logs.controller';
import { auditLogsProviders } from './audit-logs.providers';
import { AuditLogsService } from './audit-logs.service';

describe('AuditLogsController', () => {
  let controller: AuditLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuditLogsController],
      providers: [AuditLogsService, ...auditLogsProviders],
    }).compile();

    controller = module.get<AuditLogsController>(AuditLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
