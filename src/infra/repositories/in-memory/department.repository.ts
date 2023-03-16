import { IDepartmentRepository } from 'src/application/contracts/repository';
import { Departments } from 'src/domain/entities';

export class IMemoryDepartmentRepository implements IDepartmentRepository {
  private departdb: Departments[];
  constructor() {
    this.departdb = [];
  }

  async save(data: Departments): Promise<void> {
    this.departdb.push(data);
    console.log(data);
    console.table(data);
  }

  update(code: string, data: Departments): Promise<Departments> {
    throw new Error('Method not implemented.');
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
    return this.departdb.slice();
  }

  delete(code: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
