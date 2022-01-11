import {
  IsAlpha,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

enum UserType {
  'admin',
  'client',
}

export class CreateUserDto {
  @IsNotEmpty({
    message: 'el nombre es requerido',
  })
  @IsAlpha('en-US', {
    message: 'el nombre solo debe contener letras, el valor actual es: $value',
  })
  name: string;

  @IsNotEmpty({
    message: 'el apellido es requerido',
  })
  @IsAlpha('en-US', {
    message:
      'el apellido solo debe contener letras, el valor actual es: $value',
  })
  surname: string;

  @IsNotEmpty({
    message: 'la edad es requerida',
  })
  @IsInt({
    message: 'la edad debe ser un entero',
  })
  @Min(18, {
    message: 'la edad debe ser mayor a $constraint1',
  })
  @Max(90, {
    message: 'la edad debe ser menor que $constraint1',
  })
  age: number;

  @IsNotEmpty({
    message: 'el email es requerido',
  })
  @IsEmail(
    {},
    {
      message: 'el email es invalido, el valor actual es: $value',
    },
  )
  email: string;

  @IsOptional()
  @IsString({
    message: 'la direccion es invalida',
  })
  address: string;

  @IsOptional()
  @IsBoolean({
    message: 'el estado civil debe ser booleano',
  })
  single: boolean;

  @IsNotEmpty({
    message: 'el tipo de usuario es requerido',
  })
  @IsEnum(UserType, {
    message:
      'el typo de usuario debe ser: admin o client, el valor actual es: $value',
  })
  userType: string;
}
