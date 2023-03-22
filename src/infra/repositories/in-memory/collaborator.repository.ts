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

  count(): Promise<number> {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<Collaborators[]> {
    throw new Error('Method not implemented.');
  }

  delete(code: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
