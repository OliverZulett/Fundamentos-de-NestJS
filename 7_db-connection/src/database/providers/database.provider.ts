import { User } from 'src/users/entities/user.entity';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'POSTGRES_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'adminPassword123',
        database: 'users',
        entities: [User],
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, //no usar en produccion
      }),
  },
];
