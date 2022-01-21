import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class AuthLoginDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty({
    title: 'Token for user from ordway api',
    required: true,
  })
  token?: string;

  @IsString()
  @ApiProperty({
    title: 'Company name for which the api should work',
    required: true,
  })
  companyName?: string;
}
