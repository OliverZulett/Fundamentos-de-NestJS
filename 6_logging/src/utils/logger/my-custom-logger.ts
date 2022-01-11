import { LoggerService, LogLevel } from '@nestjs/common';

export class MyCustomLogger implements LoggerService {
  log(message: any, ...optionalParams: any[]) {
    console.log(
      `ESTE ES UN LOG TRADICIONAL ${new Date().getFullYear()} | CONTENT: ${message} | EXTRAS: ${optionalParams}`,
    );
  }
  error(message: any, ...optionalParams: any[]) {
    console.log(
      `ESTE ES UN ERROR ${new Date().getFullYear()} | CONTENT: ${message} | EXTRAS: ${optionalParams}`,
    );
  }
  warn(message: any, ...optionalParams: any[]) {
    console.log(
      `ESTE ES UN WARNING ${new Date().getFullYear()} | CONTENT: ${message} | EXTRAS: ${optionalParams}`,
    );
  }
}
