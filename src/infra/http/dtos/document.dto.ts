import { ApiProperty } from '@nestjs/swagger';
import { DocumentsType } from 'src/domain/enum';

export class DocumentDto {
  @ApiProperty({ enum: DocumentsType })
  type: string;

  @ApiProperty({ type: String })
  number: string;

  @ApiProperty({ type: Date })
  date_of_issue: Date;
}
