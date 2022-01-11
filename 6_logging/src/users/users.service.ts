import { Injectable, Logger, LoggerService } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MyCustomLog } from '../utils/logger/my-custom-log';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private myCustomLog: MyCustomLog) {
    this.myCustomLog.setContext('User Service');
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    this.logger.log('This action returns a #${id} user');
    this.logger.debug('This action returns a #${id} user');
    this.logger.error('This action returns a #${id} user');
    this.logger.warn('This action returns a #${id} user');
    this.logger.verbose('This action returns a #${id} user');
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    // this.myCustomLog.log('This action removes a #${id} user');
    // this.myCustomLog.debug('This action removes a #${id} user');
    // this.myCustomLog.error('This action removes a #${id} user');
    // this.myCustomLog.warn('This action removes a #${id} user');
    // this.myCustomLog.verbose('This action removes a #${id} user');
    // this.myCustomLog.myCustomLog();
    return `This action removes a #${id} user`;
  }
}
