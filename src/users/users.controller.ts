import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Request,
  Body,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'Find all users';
  }

  @Get('/:id')
  findUser(@Request() req): string {
    return `Find user by id: ${req.params.id}`;
  }

  @Post()
  createUser(@Request() req): string {
    return `User created Login - ${req.body.login} Password - ${req.body.password}`;
  }

  @Put('/:id')
  updateUser(@Request() req): string {
    return `User updated ${req.params.id}`;
  }

  @Delete()
  deleteUser(@Request() req): string {
    return `User ${req.params.id} deleted`;
  }
}
