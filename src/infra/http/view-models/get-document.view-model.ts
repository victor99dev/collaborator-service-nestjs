import { Documents } from 'src/domain/value-object';

export class GetDocumentViewModel {
  static toHttp(documents: Documents) {
    return {
      DocumentsType: documents.documentsType,
      number: documents.number,
      dateOfIssue: documents.dateOfIssue,
    };
  }
}
