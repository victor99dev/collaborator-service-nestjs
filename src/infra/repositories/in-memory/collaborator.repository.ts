import { ICollaboratorsRepository } from 'src/application/contracts';
import { Collaborators } from 'src/domain/entities';

export class IMemoryCollaboratorRepository implements ICollaboratorsRepository {
  private collaboratordb: Collaborators[];
  constructor() {
    this.collaboratordb = [];
  }

  async save(data: Collaborators): Promise<void> {
    this.collaboratordb.push(data);
  }

  async update(code: string, data: Collaborators): Promise<void> {
    const findCollaboratorId = this.collaboratordb.find(
      (collaborator) => collaborator.id === code,
    );

    findCollaboratorId.name = data.name;
    findCollaboratorId.email = data.email;
    findCollaboratorId.age = data.age;
    findCollaboratorId.departmentId = data.departmentId;
    findCollaboratorId.groupId = data.groupId;
    findCollaboratorId.description = data.description;
    findCollaboratorId.active = data.active;
    findCollaboratorId.updatedAt = data.updatedAt;
    findCollaboratorId.documents.number = data.documents.number;
    findCollaboratorId.documents.documentsType = data.documents.documentsType;
    findCollaboratorId.documents.dateOfIssue = data.documents.dateOfIssue;
    findCollaboratorId.address.city = data.address.city;
    findCollaboratorId.address.country = data.address.country;
    findCollaboratorId.address.number = data.address.number;
    findCollaboratorId.address.state = data.address.state;
    findCollaboratorId.address.streetAddress = data.address.streetAddress;

    console.log(findCollaboratorId);
  }

  async findByCode(code: string): Promise<Collaborators> {
    const collaboratorById = this.collaboratordb.find(
      (collaborator) => collaborator.id === code,
    );

    return collaboratorById;
  }

  async count(): Promise<number> {
    return this.collaboratordb.length;
  }

  async getAll(): Promise<Collaborators[]> {
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
