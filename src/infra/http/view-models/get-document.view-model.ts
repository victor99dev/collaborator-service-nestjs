import { Documents } from 'src/domain/value-object';

export class GetDocumentViewModel {
  static toHttp(documents: Documents) {
    return {
      documents_type: documents.documentsType,
      number: documents.number,
      date_of_issue: documents.dateOfIssue,
    };
  }
}
