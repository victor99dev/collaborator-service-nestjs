import { ICollaboratorRepository } from 'src/application/contracts';
import { Collaborator, Department, Group } from 'src/domain/entities';
import { DocumentType } from 'src/domain/enums';
import { UpdateCollaboratorDto } from 'src/infra/http/dtos/collaborators';

export class IMemoryCollaboratorRepository implements ICollaboratorRepository {
  private collaboratordb: Collaborator[];
  constructor() {
    this.collaboratordb = [];
  }

  async findByLogin(login: string): Promise<Collaborator> {
    const collaboratorByLogin = this.collaboratordb.find(
      (collaborator) => collaborator.login === login,
    );

    return collaboratorByLogin;
  }

  async save(data: Collaborator): Promise<void> {
    this.collaboratordb.push(data);
  }

  async update(code: string, data: UpdateCollaboratorDto): Promise<void> {
    const findCollaboratorId = this.collaboratordb.find(
      (collaborator) => collaborator.id === code,
    );

    findCollaboratorId.name = data.name;
    findCollaboratorId.age = data.age;
    findCollaboratorId.description = data.description;
    findCollaboratorId.active = data.active;
    findCollaboratorId.updatedAt = data.updated_at;
    findCollaboratorId.contact.email = data.contact.email;
    findCollaboratorId.contact.telephone = data.contact.telephone;
    findCollaboratorId.contact.socialNetwork = data.contact.social_network;
    findCollaboratorId.document.number = data.document.number;
    findCollaboratorId.document.documentType = data.document
      .type as DocumentType;
    findCollaboratorId.document.dateOfIssue = data.document.date_of_issue;
    findCollaboratorId.address.city = data.address.city;
    findCollaboratorId.address.country = data.address.country;
    findCollaboratorId.address.number = data.address.number;
    findCollaboratorId.address.state = data.address.state;
    findCollaboratorId.address.streetAddress = data.address.street_address;
  }

  async findByCode(code: string): Promise<Collaborator> {
    const collaboratorById = this.collaboratordb.find(
      (collaborator) => collaborator.id === code,
    );

    return collaboratorById;
  }

  async count(): Promise<number> {
    return this.collaboratordb.length;
  }

  async getAll(): Promise<Collaborator[]> {
    return this.collaboratordb;
  }

  async delete(code: string): Promise<void> {
    const findCollaboratorId = this.collaboratordb.find(
      (collaborator) => collaborator.id === code,
    );

    this.collaboratordb = this.collaboratordb.filter(
      (collaborator) => collaborator.id !== findCollaboratorId.id,
    );
  }

  findGroupActive(id: string): Promise<Group> {
    throw new Error('Method not implemented.');
  }

  findDepartmentActive(id: string): Promise<Department> {
    throw new Error('Method not implemented.');
  }
}
