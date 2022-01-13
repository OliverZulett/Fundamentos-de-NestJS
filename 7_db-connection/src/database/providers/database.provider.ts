import * as mongoose from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'POSTGRES_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT_POSTGRES) || 5432,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [User],
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, //no usar en produccion
      }),
  },
  {
    provide: 'MONGODB_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT_MONGODB || 27017}/${process.env.DATABASE_NAME}`,
      ),
  },
];
