import { randomUUID } from 'crypto';
import { Address, Documents, SocialMedia } from '../value-object';
import { Departments } from './department.entity';
import { Replace } from 'src/helpers';
import { Group } from './group.entity';

export interface CollaboratorsProps {
  name: string;
  email: string;
  age: number;
  documents: Documents;
  department: Departments[];
  group: Group;
  address?: Address | null;
  socialMedia?: SocialMedia[] | null;
  login: string;
  password: string;
  status: boolean;
  description?: string | null;
  active: boolean;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class Collaborators {
  private _id: string;
  private props: CollaboratorsProps;

  constructor(
    props: Replace<CollaboratorsProps, { createdAt?: Date }>,
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

  public get email(): string {
    return this.props.email;
  }
  public set email(email: string) {
    this.props.email = email;
  }

  public get age(): number {
    return this.props.age;
  }
  public set age(age: number) {
    this.props.age = age;
  }

  public get documents(): Documents {
    return this.props.documents;
  }
  public set documents(documents: Documents) {
    this.props.documents = documents;
  }

  public get department(): Departments[] {
    return this.props.department;
  }
  public set department(department: Departments[]) {
    this.props.department = department;
  }

  public get group(): Group {
    return this.props.group;
  }
  public set group(group: Group) {
    this.props.group = group;
  }

  public get address(): Address {
    return this.props.address;
  }
  public set address(address: Address) {
    this.props.address = address || null;
  }

  public get socialMedia(): SocialMedia[] {
    return this.props.socialMedia;
  }
  public set socialMedia(socialMedia: SocialMedia[]) {
    this.props.socialMedia = socialMedia || null;
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

  public get status(): boolean {
    return this.props.status;
  }
  public set status(status: boolean) {
    this.props.status = status;
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
