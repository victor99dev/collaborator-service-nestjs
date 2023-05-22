import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, Length } from 'class-validator';

export class RegisterDepartmentDto {
  @IsNotEmpty({ message: 'Department name is required' })
  @ApiProperty({ type: String })
  name: string;

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
