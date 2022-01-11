import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MyExtendedLogger } from '../utils/logger/my-extended-logger';

@Module({
  controllers: [UsersController],
  providers: [UsersService, MyExtendedLogger],
})
export class UsersModule {}
