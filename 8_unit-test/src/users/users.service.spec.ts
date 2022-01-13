import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', () => {
    const mockUser = {
      id: 99,
      name: 'mockName',
      surname: 'mockSurname',
    };
    const result = service.create(mockUser);
    expect(result).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        surname: expect.any(String),
      }),
    );
  });

  it('should return all users', () => {
    const result = service.findAll();
    expect(Array.isArray(result)).toBe(true);
  });

  it('should return an user by id', () => {
    const mockID = 1;
    const result = service.findOne(mockID);
    expect(result).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        surname: expect.any(String),
      }),
    );
  });

  it('should update a user by id', () => {
    const mockUser = {
      name: 'mockName',
      surname: 'mockSurname',
    };
    const mockID = 1;
    const result = service.update(mockID, mockUser);
    expect(result).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        surname: expect.any(String),
      }),
    );
    expect(result.name).toEqual(mockUser.name);
    expect(result.surname).toEqual(mockUser.surname);
  });
});
