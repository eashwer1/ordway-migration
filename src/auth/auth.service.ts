import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthLoginDto } from './dtos/auth-login.dto';
import * as bcrypt from 'bcryptjs';
import { CompaniesService } from 'src/companies/companies.service';
import { companies, users } from 'src/models';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private companyService: CompaniesService,
  ) {}

  async login(authLoginDto: AuthLoginDto) {
    const { user, company }= await this.validateUser(authLoginDto);

    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        authenticationToken: user.authenticationToken,
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
    const { email, password } = authLoginDto;

    const user = await this.usersService.findByEmail(email);
    const company = await this.companyService.findCompanyById(
      user.selectedCompanyId,
    );
    if (!bcrypt.compare(user.encryptedPassword, password)) {
      throw new UnauthorizedException();
    }

    return { user, company };
  }
}
