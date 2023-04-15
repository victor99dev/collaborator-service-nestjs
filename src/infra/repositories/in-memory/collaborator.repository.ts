import { ICollaboratorRepository } from 'src/application/contracts';
import { Collaborator } from 'src/domain/entities';
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
    findCollaboratorId.email = data.email;
    findCollaboratorId.age = data.age;
    // findCollaboratorId.departmentId = data.department_id;
    // findCollaboratorId.groupId = data.group_id;
    findCollaboratorId.description = data.description;
    findCollaboratorId.active = data.active;
    findCollaboratorId.updatedAt = data.updated_at;

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
}
