import { ConsoleLogger } from '@nestjs/common';

export class MyExtendedLogger extends ConsoleLogger {
  error(message: any, stack?: string, context?: string) {
    console.log(
      `ERROR ==> \nmessage: ${message} ${context ? '\ncontext:' + context : ''} \nstack: ${stack}`,
    );
    // super.error(message, stack, context);
  }
}
