export abstract class Repository<TEntity> {
  abstract save(data: TEntity): Promise<void>;

  abstract update(code: string, data: TEntity): Promise<void>;

  abstract findByCode(code: string): Promise<TEntity>;

  abstract count(): Promise<number>;

  abstract getAll(): Promise<TEntity[]>;

  abstract delete(code: string): Promise<void>;
}
