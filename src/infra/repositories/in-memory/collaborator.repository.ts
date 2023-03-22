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

  update(code: string, data: Collaborators): Promise<void> {
    throw new Error('Method not implemented.');
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
