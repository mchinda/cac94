import { IsEmail, IsString } from 'class-validator';

export class AuthModel {
  @IsEmail()
  login: string;

  @IsString()
  password: string;
}
