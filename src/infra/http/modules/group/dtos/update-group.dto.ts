import { ApiProperty } from '@nestjs/swagger';

export class UpdateGroupDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  updated_at: Date;
}
