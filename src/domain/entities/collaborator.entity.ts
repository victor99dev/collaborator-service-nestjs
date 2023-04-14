import { Department, Group } from 'src/domain/entities';
import { randomUUID } from 'crypto';
import { Address, Document } from '../value-objects';
import { Replace } from 'src/helpers';

export interface CollaboratorProps {
  name: string;
  email: string;
  age: string;
  department?: Department[];
  group?: Group;
  login: string;
  password: string;
  description?: string | null;
  active: boolean;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class Collaborator {
  private _id: string;
  private _documents: Document;
  private _address: Address;
  // private _department: Department[];
  // private _group: Group;
  private props: CollaboratorProps;

  constructor(
    props: Replace<CollaboratorProps, { createdAt?: Date }>,
    documents?: Document,
    address?: Address,
    // department?: Department[],
    // group?: Group,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this._documents = documents;
    this._address = address;
    // this._department = department;
    // this._group = group;
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

  public get documents(): Document {
    return this._documents;
  }
  public set documents(documents: Document) {
    this._documents = documents;
  }
  public SetDocuments(documents: Document) {
    this._documents = documents;
  }

  public get department(): Department[] {
    return this.props.department;
  }
  public set department(department: Department[]) {
    this.props.department = department;
  }
  public SetDepartment(department: Department[]) {
    this.props.department = department;
  }

  public get group(): Group {
    return this.props.group;
  }
  public set group(group: Group) {
    this.props.group = group;
  }
  public SetGroup(group: Group) {
    this.props.group = group;
  }

  // public get groupId(): string {
  //   return this.props.groupId;
  // }
  // public set groupId(groupId: string) {
  //   this.props.groupId = groupId;
  // }

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
  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
}
