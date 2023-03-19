import { IDepartmentRepository } from 'src/application/contracts';
import { Departments } from 'src/domain/entities';

export class IMemoryDepartmentRepository implements IDepartmentRepository {
  private departdb: Departments[];
  constructor() {
    this.departdb = [];
  }

  async save(data: Departments): Promise<void> {
    this.departdb.push(data);
  }

  async update(code: string, data: Departments): Promise<void> {
    const findDepartmentId = this.departdb.find(
      (department) => department.id === code,
    );

    findDepartmentId.name = data.name;
    findDepartmentId.description = data.description;
    findDepartmentId.active = data.active;
    findDepartmentId.updatedAt = data.updatedAt;
  }

  async findByCode(code: string): Promise<Departments> {
    const departmentbyid = this.departdb.find(
      (department) => department.id === code,
    );

    return departmentbyid;
  }

  async count(): Promise<number> {
    return this.departdb.length;
  }

  async getAll(): Promise<Departments[]> {
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
}
