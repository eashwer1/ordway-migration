import { Controller } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller('users')
@ApiExcludeController()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
