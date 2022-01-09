import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class CustomPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata) {
    const newValue = parseInt(value, 10);
    if (isNaN(newValue)) {
      throw new BadRequestException('el id de usuario no es un numero');
    }
    return newValue;
  }
}
