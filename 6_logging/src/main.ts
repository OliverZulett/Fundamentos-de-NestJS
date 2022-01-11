import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyExtendedLogger } from './utils/logger/my-extended-logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: new MyCustomLogger(),
    // bufferLogs: true,
  });
  // app.useLogger(app.get(MyExtendedLogger));
  await app.listen(3000);
}
bootstrap();
