import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, Length } from 'class-validator';

export class AddressDto {
  @Length(5, 30, {
    message:
      'The maximum number of characters in the street address is from 5 to 30',
  })
  @ApiProperty({ type: String })
  street_address: string;

  @IsNumberString(
    {},
    { message: 'A number must be entered in the Address Number field' },
  )
  @ApiProperty({ type: String })
  number: string;

  @ApiProperty({ type: String })
  city: string;

  @ApiProperty({ type: String })
  state: string;

  @ApiProperty({ type: String })
  country: string;
}
