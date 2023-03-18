import { IGroupRepository } from 'src/application/contracts/repository';
import { Group } from 'src/domain/entities/group.entity';

export class IMemoryGroupRepository implements IGroupRepository {
  private groupdb: Group[];
  constructor() {
    this.groupdb = [];
  }

  async save(data: Group): Promise<void> {
    this.groupdb.push(data);
    console.log(data);
    console.table(data);
  }

  update(code: string, data: Group): Promise<Group> {
    throw new Error('Method not implemented.');
  }

  findByCode(code: string): Promise<Group> {
    throw new Error('Method not implemented.');
  }

  count(): Promise<number> {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<Group[]> {
    throw new Error('Method not implemented.');
  }

  delete(code: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
