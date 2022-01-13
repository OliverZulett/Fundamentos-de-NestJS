import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let userController: UsersController;
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    userService = module.get<UsersService>(UsersService);
    userController = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('create user test bed', () => {
    it('should create a new user', async () => {
      const mockUser = {
        id: 1,
        name: 'name',
        surname: 'surname',
      };
      jest.spyOn(userService, 'create').mockImplementation(() => mockUser);
      const result = await userController.create(mockUser);
      expect(result).toBe(mockUser);
    });

    it('should return a not acceptable exception', async () => {
      const mockUSer = {
        id: 0,
        name: '',
        surname: '',
      };
      jest.spyOn(userService, 'create').mockImplementation(() => mockUSer);
      try {
        await userController.create(mockUSer);
      } catch (e) {
        expect(e.message).toBe('invalid user data');
      }
    });
  });

  describe('find all users test bed', () => {
    it('should return all users', async () => {
      const mockResult = [
        {
          id: 1,
          name: 'name',
          surname: 'surname',
        },
      ];
      jest.spyOn(userService, 'findAll').mockImplementation(() => mockResult);
      const result = await userController.findAll();
      expect(result).toBe(mockResult);
    });
  });
});
