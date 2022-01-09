import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { GeneralExceptionFilter } from '../filters/exceptions/general-exception.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    // {
    //   provide: APP_FILTER,
    //   useClass: GeneralExceptionFilter,
    // },
  ],
})
export class UsersModule {}
