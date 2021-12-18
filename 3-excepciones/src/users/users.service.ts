import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    throw new HttpException(
      { error: 'metodo no implementado', status: HttpStatus.NOT_IMPLEMENTED },
      HttpStatus.NOT_IMPLEMENTED,
    );
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    if (id === 1) {
      return `This action returns a #${id} user`;
    }
    // throw new HttpException('error al buscar usuario', HttpStatus.NOT_FOUND);
    // throw new HttpException(
    //   {
    //     status: HttpStatus.NOT_FOUND,
    //     error: 'error al buscar usuario',
    //   },
    //   HttpStatus.NOT_FOUND,
    // );
    throw new NotFoundException(
      { error: 'error al buscar usuario' },
      'usuario no encontrado',
    );
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    throw new HttpException(
      'error al actualizar usuario',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  remove(id: number) {
    // return `This action removes a #${id} user`;
    throw new NotImplementedException(
      { error: 'metodo no implementado' },
      'metodo no implementado',
    );
  }
}
