import { ApiProperty } from '@nestjs/swagger';

export class SocialMediaDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;
}
