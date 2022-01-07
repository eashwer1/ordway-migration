import { Inject, Injectable } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { users } from '../models/users';

@ApiBearerAuth()
@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof users,
  ) {}

  async showById(id: number): Promise<users> {
    const user = await this.findById(id);

    delete user.encryptedPassword;
    return user;
  }

  async findById(id: number) {
    return await this.usersRepository.findOne<users>({ where: { id } });
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
