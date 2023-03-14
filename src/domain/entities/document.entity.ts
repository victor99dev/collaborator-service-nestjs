import { Replace } from 'src/helpers';
import { DocumentsType } from '../enum';
import { randomUUID } from 'crypto';

export interface DocumentsProps {
  number: number;
  dateOfIssue: Date;
  documentsType: DocumentsType;
  active: boolean;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class Documents {
  private _id: string;
  private props: DocumentsProps;

  constructor(
    props: Replace<DocumentsProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
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

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
  public update() {
    this.props.updatedAt = new Date() || null;
  }

  public get active(): boolean {
    return this.props.active;
  }
  public set active(active: boolean) {
    this.props.active = active;
  }
}
