import { Department, Group } from 'src/domain/entities';

export abstract class Repository<TEntity> {
  abstract save(data: TEntity): Promise<void>;

  abstract update(code: string, data: any): Promise<void>;

  abstract findByCode(code: string): Promise<TEntity>;

  abstract findByLogin(login: string): Promise<TEntity>;

  abstract count(): Promise<number>;

  abstract getAll(): Promise<TEntity[]>;

  abstract delete(code: string): Promise<void>;

  abstract findDepartmentActive(id: string): Promise<Department | null>;

  abstract findGroupActive(id: string): Promise<Group | null>;
}
