import { PrismaClient } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { IDepartmentRepository } from 'src/application/contracts';
import { Departments } from 'src/domain/entities';
import { PrismaDepartmentMapper } from 'src/infra/mappers/department-mapper';

@Injectable()
export class IPrismaDepartmentRepository implements IDepartmentRepository {
  constructor(private readonly _prismaClient: PrismaClient) {}
  async save(data: Departments): Promise<void> {
    const departmentMapper = PrismaDepartmentMapper.toPrisma(data);
    await this._prismaClient.departments.create({
      data: { ...departmentMapper },
    });
  }
  update(code: string, data: any): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findByCode(code: string): Promise<Departments> {
    throw new Error('Method not implemented.');
  }
  findByLogin(login: string): Promise<Departments> {
    throw new Error('Method not implemented.');
  }
  count(): Promise<number> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<Departments[]> {
    throw new Error('Method not implemented.');
  }
  delete(code: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
