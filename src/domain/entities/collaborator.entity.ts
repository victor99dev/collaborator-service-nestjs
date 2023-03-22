import { randomUUID } from 'crypto';
import { Address, Documents } from '../value-object';
import { Replace } from 'src/helpers';

export interface CollaboratorsProps {
  name: string;
  email: string;
  age: string;
  departmentId: string[];
  groupId: string;
  login: string;
  password: string;
  description?: string | null;
  active: boolean;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class Collaborators {
  private _id: string;
  private _documents: Documents;
  private _address: Address;
  private props: CollaboratorsProps;

  constructor(
    props: Replace<CollaboratorsProps, { createdAt?: Date }>,
    documents?: Documents,
    address?: Address,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this._documents = documents;
    this._address = address;
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

  public get email(): string {
    return this.props.email;
  }
  public set email(email: string) {
    this.props.email = email;
  }

  public get age(): string {
    return this.props.age;
  }
  public set age(age: string) {
    this.props.age = age;
  }

  public get documents(): Documents {
    return this._documents;
  }
  public set documents(documents: Documents) {
    this._documents = documents;
  }
  public SetDocuments(documents: Documents) {
    this._documents = documents;
  }

  public get departmentId(): string[] {
    return this.props.departmentId;
  }
  public set departmentId(departmentId: string[]) {
    this.props.departmentId = departmentId;
  }

  public get groupId(): string {
    return this.props.groupId;
  }
  public set groupId(groupId: string) {
    this.props.groupId = groupId;
  }

  public get address(): Address {
    return this._address;
  }
  public set address(address: Address) {
    this._address = address || null;
  }
  public SetAnddress(address: Address) {
    this._address = address;
  }

  public get login(): string {
    return this.props.login;
  }
  public set login(login: string) {
    this.props.login = login;
  }

  public get password(): string {
    return this.props.password;
  }
  public set password(password: string) {
    this.props.password = password;
  }

  public get description(): string {
    return this.props.description;
  }
  public set description(description: string) {
    this.props.description = description || null;
  }

  public get active(): boolean {
    return this.props.active;
  }
  public set active(active: boolean) {
    this.props.active = active;
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
}
