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

  update(code: string, data: Group): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findByCode(code: string): Promise<Group> {
    const groupbyid = this.groupdb.find((group) => group.id === code);

    return groupbyid;
  }

  async count(): Promise<number> {
    return this.groupdb.length;
  }

  async getAll(): Promise<Group[]> {
    return this.groupdb;
  }

  delete(code: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
