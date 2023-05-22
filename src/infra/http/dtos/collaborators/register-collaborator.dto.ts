import { ApiProperty } from '@nestjs/swagger';
import { DocumentDto } from '../document.dto';
import { AddressDto } from '../address.dto';
import { ContactDto } from '../contact.dto';
import {
  IsBoolean,
  IsLowercase,
  IsNotEmpty,
  IsNumberString,
  IsUUID,
  Length,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class RegisterCollaboratorDto {
  @IsNotEmpty({ message: 'Collaborator name is required' })
  @ApiProperty({ type: String })
  name: string;

  @IsLowercase({ message: 'Login must be in lower case' })
  @ApiProperty({ type: String })
  login: string;

  @ApiProperty({ type: String })
  password: string;

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

  @IsNotEmpty()
  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ type: Date })
  updated_at: Date;
}
