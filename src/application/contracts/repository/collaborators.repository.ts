import { Collaborators } from 'src/domain/entities';

export interface ICollaboratorsReadRepository {
  getAll(): Promise<Collaborators[]>;
  count(): Promise<number>;
  findByCode(code: string): Promise<Collaborators | null>;
  findUserByLogin(Login: string): Promise<Collaborators | null>;
}

export interface ICollaboratorsWriteRepository {
  saveCollaborator(data: Collaborators): Promise<void>;
}

export interface ICollaboratorsRepository {
  saveCollaborator(data: Collaborators): Promise<void>;
  getAll(): Promise<Collaborators[]>;
  count(): Promise<number>;
  findByCode(code: string): Promise<Collaborators | null>;
  findUserByLogin(Login: string): Promise<Collaborators | null>;
}
