import { Departments } from 'src/domain/entities';

export interface IDepartmentsReadRepository {
  save(data: Departments): Promise<void>;
  getAll(): Promise<Departments[]>;
  count(): Promise<number>;
  findByCode(code: string): Promise<Departments | null>;
}

export interface IDepartmentsWriteRepository {
  save(data: Departments): Promise<void>;
}

export interface IDepartmentsRepository {
  save(data: Departments): Promise<void>;
  getAll(): Promise<Departments[]>;
  count(): Promise<number>;
  findByCode(code: string): Promise<Departments | null>;
}
