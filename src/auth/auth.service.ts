import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { User } from '../user/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(payload: JwtPayload): Promise<any> {
    const user = await this.usersService.findUserBy({ login: payload });
    return user;
  }

  async login({ login, password }): Promise<{ data: { token: string } }> {
    const user: User = await this.usersService.findUserBy({ login });
    if (user && user.password === password) {
      const token: string = this.jwtService.sign(user.login);
      return { data: { token } };
    }
    throw new UnauthorizedException();
  }
}
