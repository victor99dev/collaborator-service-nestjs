import { ApiProperty } from '@nestjs/swagger';
import { DocumentDto } from '../document.dto';
import { AddressDto } from '../address.dto';

export class UpdateCollaboratorDto {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  age: string;

  @ApiProperty({ type: DocumentDto })
  documents: DocumentDto;

  @ApiProperty({ type: String, isArray: true })
  department_id: string[];

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
