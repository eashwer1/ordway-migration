import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthLoginDto } from './dtos/auth-login.dto';
import { CompaniesService } from '../companies/companies.service';
import { companies, users } from '../models';
import { UsersCompaniesService } from '../users-companies/users-companies.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private companyService: CompaniesService,
    private usersCompaniesService: UsersCompaniesService,
  ) {}

  async login(authLoginDto: AuthLoginDto) {
    const { user, company } = await this.validateUser(authLoginDto);

    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        authenticationToken: user.authenticationToken,
        superUser: user.superUser,
      },
      company: {
        id: company.id,
        name: company.name,
      },
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(authLoginDto: AuthLoginDto): Promise<{
    user: users;
    company: companies;
  }> {
    const { email, token, companyName } = authLoginDto;

    const user = await this.usersService.findByEmail(email);
    const company = await this.companyService.findCompanyByName(companyName);

    if (user.authenticationToken !== token) {
      throw new UnauthorizedException('Invalid email and token combination');
    }

    if (!company) {
      throw new BadRequestException('Company does not exist');
    }

    const usersCompanies =
      await this.usersCompaniesService.findUserCompanyByUserAndCompanyId(
        user.id,
        company.id,
      );

    if (!usersCompanies) {
      throw new UnauthorizedException(
        `User does not have access to company ${companyName}`,
      );
    }

    return { user, company };
  }
}
