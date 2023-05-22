import { ApiProperty } from '@nestjs/swagger';
import { DocumentDto } from '../document.dto';
import { AddressDto } from '../address.dto';
import { ContactDto } from '../contact.dto';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumberString,
  IsUUID,
  Length,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCollaboratorDto {
  @IsNotEmpty({ message: 'Collaborator name is required' })
  @ApiProperty({ type: String })
  name: string;

  @IsNumberString({}, { message: 'Enter the age' })
  @ApiProperty({ type: String })
  age: string;

  @ValidateNested()
  @Type(() => ContactDto)
  @ApiProperty({ type: ContactDto })
  contact: ContactDto;

  @ValidateNested()
  @Type(() => DocumentDto)
  @ApiProperty({ type: DocumentDto })
  document: DocumentDto;

  @IsUUID()
  @ApiProperty({ type: String })
  department_id: string;

  @IsUUID()
  @ApiProperty({ type: String })
  group_id: string;

  @ValidateNested()
  @Type(() => AddressDto)
  @ApiProperty({ type: AddressDto })
  address: AddressDto;

  @Length(5, 100, {
    message:
      'The maximum number of characters in the description is from 5 to 100',
  })
  @ApiProperty({ type: String })
  description: string;

  @IsBoolean({ message: 'Active is a boolean, use true or false' })
  @ApiProperty({ type: Boolean })
  active: boolean;

  @ApiProperty({ type: Date })
  updated_at: Date;
}
