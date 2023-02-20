import {
  IDepartmentsReadRepository,
  IDepartmentsWriteRepository,
} from 'src/application/contracts/repository';
import { Departments } from 'src/domain/entities';

export class IMemoryDepartmentRepository
  implements IDepartmentsReadRepository, IDepartmentsWriteRepository
{
  private departdb: Departments[];
  constructor() {
    this.departdb = [];
  }

  async save(data: Departments): Promise<void> {
    this.departdb.push(data);
    console.log(data);
    console.table(data);
  }

  async getAll(): Promise<Departments[]> {
    return this.departdb.slice();
  }

  async count(): Promise<number> {
    return this.departdb.length;
  }

  findByCode(code: string): Promise<Departments> {
    throw new Error('Method not implemented.');
  }
}
