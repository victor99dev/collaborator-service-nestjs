import { IGroupRepository } from 'src/application/contracts';
import { Department } from 'src/domain/entities';
import { Group } from 'src/domain/entities/group.entity';

export class IMemoryGroupRepository implements IGroupRepository {
  private groupdb: Group[];
  constructor() {
    this.groupdb = [];
  }

  findByLogin(login: string): Promise<Group> {
    throw new Error('Method not implemented.');
  }

  async save(data: Group): Promise<void> {
    this.groupdb.push(data);
  }

  async update(code: string, data: Group): Promise<void> {
    const findGroupId = this.groupdb.find((group) => group.id === code);

    findGroupId.name = data.name;
    findGroupId.description = data.description;
    findGroupId.active = data.active;
    findGroupId.updatedAt = data.updatedAt;
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

  async delete(code: string): Promise<void> {
    const findGroupId = this.groupdb.find((group) => group.id === code);

    this.groupdb = this.groupdb.filter((group) => group.id !== findGroupId.id);
  }

  findGroupActive(id: string): Promise<Group> {
    throw new Error('Method not implemented.');
  }

  findDepartmentActive(id: string): Promise<Department> {
    throw new Error('Method not implemented.');
  }
}
