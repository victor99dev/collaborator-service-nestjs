import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumberString } from 'class-validator';
import { DocumentType } from 'src/domain/enums';

export class DocumentDto {
  @IsEnum(DocumentType)
  @ApiProperty({ enum: DocumentType })
  type: string;

  @IsNumberString(
    {},
    { message: 'A number must be entered in the Document Number field' },
  )
  @ApiProperty({ type: String })
  number: string;

  @ApiProperty({ type: Date })
  date_of_issue: Date;
}
