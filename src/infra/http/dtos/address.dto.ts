import { ApiProperty } from '@nestjs/swagger';

export class AddressDto {
  @ApiProperty({ type: String })
  street_address: string;

  @ApiProperty({ type: String })
  number: string;

  @ApiProperty({ type: String })
  city: string;

  @ApiProperty({ type: String })
  state: string;

  @ApiProperty({ type: String })
  country: string;
}
