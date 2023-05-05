import { IDepartmentRepository } from 'src/application/contracts';
import { Department, Group } from 'src/domain/entities';

export class IMemoryDepartmentRepository implements IDepartmentRepository {
  private departdb: Department[];
  constructor() {
    this.departdb = [];
  }

  findByLogin(login: string): Promise<Department> {
    throw new Error('Method not implemented.');
  }

  async save(data: Department): Promise<void> {
    this.departdb.push(data);
  }

  async update(code: string, data: Department): Promise<void> {
    const findDepartmentId = this.departdb.find(
      (department) => department.id === code,
    );

    findDepartmentId.name = data.name;
    findDepartmentId.description = data.description;
    findDepartmentId.active = data.active;
    findDepartmentId.updatedAt = data.updatedAt;
  }

  async findByCode(code: string): Promise<Department> {
    const departmentByid = this.departdb.find(
      (department) => department.id === code,
    );

    return departmentByid;
  }

  async count(): Promise<number> {
    return this.departdb.length;
  }

  async getAll(): Promise<Department[]> {
    return this.departdb;
  }

  async delete(code: string): Promise<void> {
    const findDepartmentId = this.departdb.find(
      (department) => department.id === code,
    );

    this.departdb = this.departdb.filter(
      (department) => department.id !== findDepartmentId.id,
    );
  }

  findGroupActive(id: string): Promise<Group> {
    throw new Error('Method not implemented.');
  }

  findDepartmentActive(id: string): Promise<Department> {
    throw new Error('Method not implemented.');
  }
}
