import {
  IDepartmentsReadRepository,
  IDepartmentsWriteRepository,
} from 'src/application/contracts/repository';
import { Departments } from 'src/domain/entities';

export class IMemoryDepartmentRepository
  implements IDepartmentsReadRepository, IDepartmentsWriteRepository
{
  save(data: Departments): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<Departments[]> {
    throw new Error('Method not implemented.');
  }
  count(): Promise<number> {
    throw new Error('Method not implemented.');
  }
  findByCode(code: string): Promise<Departments> {
    throw new Error('Method not implemented.');
  }

}
