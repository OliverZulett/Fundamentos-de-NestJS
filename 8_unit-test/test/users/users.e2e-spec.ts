/* eslint-disable prettier/prettier */
import { INestApplication, NotAcceptableException } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { UsersModule } from '../../src/users/users.module';
import { UsersService } from '../../src/users/users.service';
import * as request from 'supertest';

describe('UsersController (e2e)', () => {
  let app: INestApplication;
  const mockUSer = {
    id: 1,
    name: 'name',
    surname: 'surname',
  };
  const mockUserService = {
    findAll: () => [
      mockUSer,
    ],
    create: (user: any) => {
      if (user.name.length > 0 && user.surname.length > 0) {
        return mockUSer;
      }
      throw new NotAcceptableException('invalid user data');
    }
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(UsersService)
      .useValue(mockUserService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET users', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(mockUserService.findAll());
  });

  describe('/POST users', () => {
    it('should create a user', () => {
      const mockUSer = {
        id: 1,
        name: 'name',
        surname: 'surname',
      };
      return request(app.getHttpServer())
        .post('/users')
        .send(mockUSer)
        .expect(201)
        .expect(mockUSer);
    });
    it('should return an invalid exception', async () => {
      const mockUSer = {
        id: 0,
        name: '',
        surname: '',
      };
      const response = await request(app.getHttpServer())
        .post('/users')
        .send(mockUSer)
      
      expect(response.statusCode).toBe(406);
      expect(response.body.message).toBe('invalid user data');
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
