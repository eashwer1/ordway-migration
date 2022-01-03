import { Controller } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { AccountTypesService } from './account-types.service';

@Controller('account-types')
@ApiExcludeController()
export class AccountTypesController {
  constructor(private readonly accountTypesService: AccountTypesService) {}
}
