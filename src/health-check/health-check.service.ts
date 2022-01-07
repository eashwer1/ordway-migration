import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
  healthCheck() {
    return 'OK!';
  }
}
