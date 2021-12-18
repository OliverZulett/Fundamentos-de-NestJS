import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GeneralExceptionFilter } from './filters/exceptions/general-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new GeneralExceptionFilter());
  await app.listen(3000);
}
bootstrap();
