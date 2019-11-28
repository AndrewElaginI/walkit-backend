import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Request,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    const users = await this.userService.findAll();
    return users;
  }

  @Get('/:id')
  async findUser(@Param('id') id: string): Promise<User> {
    const user = this.userService.findUserBy({ id });
    return user;
  }

  @Post()
  async createUser(@Body() userData: UserDto): Promise<User> {
    const user = await this.userService.addUser(userData);
    return user;
  }

  @Put(':id')
  async updateUser(@Body() userData: UserDto, @Param('id') id: string) {
    const updatedUser = this.userService.updateUser(userData, id);
  }

  @Delete('/:id')
  deleteUser(@Request() req): string {
    return `User ${req.params.id} deleted`;
  }
}
