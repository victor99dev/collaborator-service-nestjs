import { ApiProperty } from '@nestjs/swagger';
import { DocumentType } from 'src/domain/enums';

export class DocumentDto {
  @ApiProperty({ enum: DocumentType })
  type: string;

  @ApiProperty({ type: String })
  number: string;

  @ApiProperty({ type: Date })
  date_of_issue: Date;
}
