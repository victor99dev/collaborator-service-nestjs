import { PrismaClient } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { IDepartmentRepository } from 'src/application/contracts';
import { Departments } from 'src/domain/entities';
import { PrismaDepartmentMapper } from 'src/infra/database/mappers';

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

  async findByCode(code: string): Promise<Departments> {
    const department = await this._prismaClient.departments.findUnique({
      where: { id: code },
    });
    if (!department) {
      return null;
    } else {
      return PrismaDepartmentMapper.toDomain(department);
    }
  }

  findByLogin(login: string): Promise<Departments> {
    throw new Error('Method not implemented.');
  }

  async count(): Promise<number> {
    return await this._prismaClient.departments.count();
  }

  async getAll(): Promise<Departments[]> {
    const department = await this._prismaClient.departments.findMany();

    const list: Departments[] = [];
    department.map((x) => list.push(PrismaDepartmentMapper.toDomain(x)));

    return list;
  }

  delete(code: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
