import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CustomPipePipe implements PipeTransform<string, number> {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
