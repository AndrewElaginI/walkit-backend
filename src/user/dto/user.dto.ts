import { IsDefined, IsString, IsNumberString } from 'class-validator';

export class UserDto {
  @IsString()
  @IsDefined()
  login: string;

  @IsString()
  @IsDefined()
  password: string;
}
