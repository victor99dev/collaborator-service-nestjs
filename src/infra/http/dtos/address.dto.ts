import { ApiProperty } from '@nestjs/swagger';

export class AddressDto {
  @ApiProperty()
  street_address: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  country: string;
}
