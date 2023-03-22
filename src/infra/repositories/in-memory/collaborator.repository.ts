import { ICollaboratorsRepository } from 'src/application/contracts';
import { Collaborators } from 'src/domain/entities';

export class IMemoryCollaboratorRepository implements ICollaboratorsRepository {
  private collaboratordb: Collaborators[];
  constructor() {
    this.collaboratordb = [];
  }

  async save(data: Collaborators): Promise<void> {
    this.collaboratordb.push(data);
    console.log(data);
  }

  update(code: string, data: Collaborators): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findByCode(code: string): Promise<Collaborators> {
    throw new Error('Method not implemented.');
  }

  async count(): Promise<number> {
    return this.collaboratordb.length;
  }

  async getAll(): Promise<Collaborators[]> {
    return this.collaboratordb;
  }

  delete(code: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
