import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsNumber,
  Matches,
} from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  //   const phoneNumber = '123-456-7890';
  @Matches(/^\d{3}-\d{3}-\d{4}$/, {
    message: 'Enter Phone like this : 123-456-7890',
  })
  phone: string;

  @IsEmail()
  email: string;
  @MinLength(5)
  password: string;
}
