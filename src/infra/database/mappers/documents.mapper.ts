import { Document } from 'src/domain/value-objects';
import { DocumentType } from 'src/domain/enums';
import { Documents as RawDocuments } from '@prisma/client';

export class PrismaDocumentMapper {
  static toPrisma(document: Document) {
    return {
      number: document.number,
      date_of_issue: document.dateOfIssue,
      document_type: document.documentType as DocumentType,
    };
  }
  static toDomain(raw: RawDocuments): Document {
    return new Document({
      number: raw.number,
      dateOfIssue: raw.date_of_issue,
      documentType: raw.document_type as DocumentType,
    });
  }
}
