import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthLoginDto } from './dtos/auth-login.dto';
import * as bcrypt from 'bcryptjs';
import { CompaniesService } from '../companies/companies.service';
import { companies, users } from '../models';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private companyService: CompaniesService,
  ) {}

  async login(authLoginDto: AuthLoginDto) {
    const { user, company } = await this.validateUser(authLoginDto);

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
    const { email, password, apiKey } = authLoginDto;

    const user = await this.usersService.findByEmail(email);
    const company = await this.companyService.findCompanyById(
      user.selectedCompanyId,
    );
    if (password && !bcrypt.compare(user.encryptedPassword, password)) {
      throw new UnauthorizedException('Email or password is wrong');
    }

    if (apiKey && user.authenticationToken !== apiKey) {
      throw new UnauthorizedException('Invalid email and api key combination');
    }

    if (!password && !apiKey) {
      throw new UnauthorizedException('Login information is needed');
    }

    return { user, company };
  }
}
