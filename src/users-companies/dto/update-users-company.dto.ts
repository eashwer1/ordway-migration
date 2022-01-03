import { PartialType } from '@nestjs/swagger';
import { CreateUsersCompanyDto } from './create-users-company.dto';

export class UpdateUsersCompanyDto extends PartialType(CreateUsersCompanyDto) {}
