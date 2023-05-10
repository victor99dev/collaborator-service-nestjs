import { ApiProperty } from '@nestjs/swagger';
import { DocumentDto } from '../document.dto';
import { AddressDto } from '../address.dto';
import { ContactDto } from '../contact.dto';

export class UpdateCollaboratorDto {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  age: string;

  @ApiProperty({ type: ContactDto })
  contact: ContactDto;

  @ApiProperty({ type: DocumentDto })
  document: DocumentDto;

  @ApiProperty({ type: String })
  department_id: string;

  @ApiProperty({ type: String })
  group_id: string;

  @ApiProperty({ type: AddressDto })
  address: AddressDto;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: Boolean })
  active: boolean;

  @ApiProperty({ type: Date })
  updated_at: Date;
}
