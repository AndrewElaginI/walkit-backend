import { IsDefined, IsString } from 'class-validator';
import { UserRole } from '../user.entity';

export class UserDto {
  @IsString()
  @IsDefined()
  login: string;

  @IsString()
  @IsDefined()
  password: string;

  // @IsString()
  // @IsDefined()
  // role: UserRole;
}
