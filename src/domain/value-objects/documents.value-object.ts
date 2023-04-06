import { DocumentType } from '../enums';

export interface DocumentProps {
  number: string;
  dateOfIssue: Date;
  documentType: DocumentType;
}

export class Document {
  private props: DocumentProps;

  constructor(props: DocumentProps) {
    this.props = { ...props };
  }

  public get number(): string {
    return this.props.number;
  }
  public set number(number: string) {
    this.props.number = number;
  }

  public get dateOfIssue(): Date {
    return this.props.dateOfIssue;
  }
  public set dateOfIssue(dateOfIssue: Date) {
    this.props.dateOfIssue = dateOfIssue;
  }

  public get documentType(): DocumentType {
    return this.props.documentType;
  }
  public set documentType(DocumentsType: DocumentType) {
    this.props.documentType = DocumentsType;
  }
}
