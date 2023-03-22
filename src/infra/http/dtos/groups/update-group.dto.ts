import { ApiProperty } from '@nestjs/swagger';

export class UpdateGroupDto {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: Boolean })
  active: boolean;

  @ApiProperty({ type: Date })
  updated_at: Date;
}
