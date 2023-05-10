import { ApiProperty } from '@nestjs/swagger';

export class ContactDto {
  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  telephone: string;

  @ApiProperty({ type: String })
  social_network: string;
}
