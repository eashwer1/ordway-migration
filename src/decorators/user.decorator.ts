import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { companies, users } from '../models';

export interface RequestUser {
  user: users;
  company: companies;
}

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as RequestUser;
  },
);
