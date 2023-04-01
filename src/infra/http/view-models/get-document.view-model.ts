import { Document } from 'src/domain/value-objects';

export class GetDocumentViewModel {
  static toHttp(documents: Document) {
    return {
      documents_type: documents.documentsType,
      number: documents.number,
      date_of_issue: documents.dateOfIssue,
    };
  }
}
