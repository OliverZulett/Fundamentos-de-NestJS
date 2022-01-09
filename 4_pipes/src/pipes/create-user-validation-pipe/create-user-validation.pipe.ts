import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { CreateUserDto } from '../../users/dto/create-user.dto';

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(createDtoSchema: CreateUserDto, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(createDtoSchema);
    if (error) {
      console.log(error);
      const messageError = 'Body Request invalido';
      throw new BadRequestException({
        message: messageError,
        error: error,
      });
    }
    return createDtoSchema;
  }
}
