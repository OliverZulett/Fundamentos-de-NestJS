import { Module } from '@nestjs/common';
import { MyExtendedLogger } from './my-extended-logger';
import { MyCustomLog } from './my-custom-log';

@Module({
  providers: [MyExtendedLogger, MyCustomLog],
  exports: [MyExtendedLogger, MyCustomLog],
})
export class LoggerModule {}
