import { DocumentsType } from '../enum';

export interface DocumentsProps {
  number: string;
  dateOfIssue: Date;
  documentsType: DocumentsType;
}

export class Documents {
  private props: DocumentsProps;

  constructor(props: DocumentsProps) {
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

  public get documentsType(): DocumentsType {
    return this.props.documentsType;
  }
  public set documentsType(DocumentsType: DocumentsType) {
    this.props.documentsType = DocumentsType;
  }
}
