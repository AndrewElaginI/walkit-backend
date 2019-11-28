import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.providers';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  // imports: [DatabaseModule],
  providers: [...userProviders, UserService],
  controllers: [UserController],
})
export class UserModule {}
