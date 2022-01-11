import * as mongoose from 'mongoose';
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
        database: 'NEST_DB',
        entities: [User],
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, //no usar en produccion
      }),
  },
  {
    provide: 'MONGODB_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://admin:adminPassword123@localhost:27017/NEST_DB'),
  },
];
