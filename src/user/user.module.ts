import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { userProviders } from './user.providers';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [...userProviders, UserService],
  controllers: [UserController],
})
export class UserModule {}
