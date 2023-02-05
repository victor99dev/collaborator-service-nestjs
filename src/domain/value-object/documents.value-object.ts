import { DocumentsType } from '../enum';

export interface DocumentsProps {
  number: number;
  dateOfIssue: Date;
  documentsType: DocumentsType;
}

export class Documents {
  private props: DocumentsProps;

  constructor(props: DocumentsProps) {
    this.props = { ...props };
  }

  public get number(): number {
    return this.props.number;
  }
  public set number(number: number) {
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
