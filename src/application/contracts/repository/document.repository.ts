import { Documents } from 'src/domain/entities';

export interface IDocumentsReadRepository {
  save(data: Documents): Promise<void>;
  getAll(): Promise<Documents[]>;
  count(): Promise<number>;
  findByCode(code: string): Promise<Documents | null>;
}

export interface IDocumentsWriteRepository {
  save(data: Documents): Promise<void>;
}

export interface IDocumentsRepository {
  save(data: Documents): Promise<void>;
  getAll(): Promise<Documents[]>;
  count(): Promise<number>;
  findByCode(code: string): Promise<Documents | null>;
}
