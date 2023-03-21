import { ApiProperty } from '@nestjs/swagger';
import { DocumentsType } from 'src/domain/enum';

export class DocumentDto {
  @ApiProperty({ enum: DocumentsType })
  type: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  date_of_issue: Date;

  @ApiProperty()
  documents_type: string;
}
