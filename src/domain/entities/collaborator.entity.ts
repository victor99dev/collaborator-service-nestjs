import { Department, Group } from 'src/domain/entities';
import { randomUUID } from 'crypto';
import { Address, Contact, Document } from '../value-objects';
import { Replace } from 'src/helpers';

export interface CollaboratorProps {
  name: string;
  age: string;
  contact?: Contact;
  department?: Department;
  group?: Group;
  document?: Document;
  address?: Address;
  login: string;
  password: string;
  description?: string | null;
  active: boolean;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class Collaborator {
  private _id: string;
  private props: CollaboratorProps;

  constructor(
    props: Replace<CollaboratorProps, { createdAt?: Date }>,
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

  public get age(): string {
    return this.props.age;
  }
  public set age(age: string) {
    this.props.age = age;
  }

  public get contact(): Contact {
    return this.props.contact;
  }
  public set contact(contact: Contact) {
    this.props.contact = contact;
  }
  public SetContact(contact: Contact) {
    this.props.contact = contact;
  }

  public get document(): Document {
    return this.props.document;
  }
  public set document(document: Document) {
    this.props.document = document;
  }
  public SetDocument(document: Document) {
    this.props.document = document;
  }

  public get department(): Department {
    return this.props.department;
  }
  public set department(department: Department) {
    this.props.department = department;
  }
  public SetDepartment(department: Department) {
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

  public get address(): Address {
    return this.props.address;
  }
  public set address(address: Address) {
    this.props.address = address || null;
  }
  public SetAnddress(address: Address) {
    this.props.address = address;
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
