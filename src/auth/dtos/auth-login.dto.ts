import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class AuthLoginDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password?: string;

  @IsString()
  @ApiProperty({
    title: 'Api-key from ordway api',
  })
  apiKey?: string;
}
