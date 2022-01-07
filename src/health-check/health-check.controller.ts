import { Controller, Get } from '@nestjs/common';
import { ApiExcludeController, ApiExcludeEndpoint } from '@nestjs/swagger';
import { HealthCheckService } from './health-check.service';

@Controller('health-check')
@ApiExcludeController()
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get()
  healthCheck() {
    return this.healthCheckService.healthCheck();
  }
}
