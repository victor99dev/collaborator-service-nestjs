import { ApiProperty } from '@nestjs/swagger';
import { AddressDto, DocumentDto, SocialMediaDto } from '..';

export class RegisterCollaboratorDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  age: string;

  @ApiProperty({ type: DocumentDto })
  documents: DocumentDto;

  @ApiProperty()
  department_id: string[];

  @ApiProperty()
  group_id: string;

  // @ApiProperty()
  // address: AddressDto;

  // @ApiProperty()
  // social_media: SocialMediaDto;

  @ApiProperty()
  login: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
