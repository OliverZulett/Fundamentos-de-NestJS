import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ValidatorMiddleware } from './middleware/validator/validator.middleware';
import { loggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidatorMiddleware)
      .exclude(
        { path: 'users', method: RequestMethod.DELETE },
        { path: 'users', method: RequestMethod.GET },
      )
      .forRoutes(
        { path: 'users', method: RequestMethod.POST },
        { path: 'users/(*)', method: RequestMethod.PATCH },
      );
  }
}
