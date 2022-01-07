import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { companies, users } from 'src/models';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as { user: users; company: companies };
  },
);
