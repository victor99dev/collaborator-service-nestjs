import { randomUUID } from 'crypto';
import { Address, Documents, SocialMedia } from '../value-object';
import { Replace } from 'src/helpers';

export interface CollaboratorsProps {
  name: string;
  email: string;
  age: string;
  documents: Documents;
  departmentId: string[];
  groupId: string;
  address?: Address | null;
  socialMedia?: SocialMedia[] | null;
  login: string;
  password: string;
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

  public get age(): string {
    return this.props.age;
  }
  public set age(age: string) {
    this.props.age = age;
  }

  public get documents(): Documents {
    return this.props.documents;
  }
  public set documents(documents: Documents) {
    this.props.documents = documents;
  }

  public get department(): string[] {
    return this.props.departmentId;
  }
  public set department(department: string[]) {
    this.props.departmentId = department;
  }

  public get group(): string {
    return this.props.groupId;
  }
  public set group(group: string) {
    this.props.groupId = group;
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
