import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class AuthLoginDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
  })
  password?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    title: 'Api-key from ordway api',
    required: false,
  })
  apiKey?: string;
}
