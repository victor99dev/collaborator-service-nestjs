import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumberString, Length } from 'class-validator';

export class ContactDto {
  @IsEmail({}, { message: 'Enter a valid email' })
  @ApiProperty({ type: String })
  email: string;

  @Length(5, 15, {
    message: 'Enter a telephone number similar to +0000000000000',
  })
  @IsNumberString()
  @ApiProperty({ type: String })
  telephone: string;

  @ApiProperty({ type: String })
  social_network: string;
}
