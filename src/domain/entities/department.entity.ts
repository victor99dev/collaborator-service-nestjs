import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers';

export interface DepartmentsProps {
  name: string;
  description: string;
  active: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class Departments {
  private _id: string;
  private props: DepartmentsProps;

  constructor(
    props: Replace<DepartmentsProps, { createdAt?: Date }>,
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

  public get name(): string {
    return this.props.name;
  }
  public set name(name: string) {
    this.props.name = name;
  }

  public get description(): string {
    return this.props.description;
  }
  public set description(description: string) {
    this.props.description = description;
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

  public get isDeleted(): boolean {
    return this.props.isDeleted;
  }
  public set isDeleted(isDeleted: boolean) {
    this.props.isDeleted = isDeleted;
  }
}
