import { PrismaClient } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { IDepartmentRepository } from 'src/application/contracts';
import { Department, Group } from 'src/domain/entities';
import { PrismaDepartmentMapper } from 'src/infra/database/mappers';

@Injectable()
export class IPrismaDepartmentRepository implements IDepartmentRepository {
  constructor(private readonly _prismaClient: PrismaClient) {}

  async save(data: Department): Promise<void> {
    const departmentMapper = PrismaDepartmentMapper.toPrisma(data);

    await this._prismaClient.departments.create({
      data: { ...departmentMapper },
    });
  }

  async update(code: string, data: Department): Promise<void> {
    const departmentMapper = PrismaDepartmentMapper.toPrisma(data);

    await this._prismaClient.departments.update({
      where: { id: code },
      data: { ...departmentMapper },
    });
  }

  async findByCode(code: string): Promise<Department> {
    const department = await this._prismaClient.departments.findUnique({
      where: { id: code },
    });
    if (!department) {
      return null;
    } else {
      return PrismaDepartmentMapper.toDomain(department);
    }
  }

  findByLogin(login: string): Promise<Department> {
    throw new Error('Method not implemented.');
  }

  async count(): Promise<number> {
    return await this._prismaClient.departments.count();
  }

  async getAll(): Promise<Department[]> {
    const department = await this._prismaClient.departments.findMany();

    const list: Department[] = [];
    department.map((x) => list.push(PrismaDepartmentMapper.toDomain(x)));

    return list;
  }

  async delete(code: string): Promise<void> {
    await this._prismaClient.departments.delete({
      where: { id: code },
    });
  }

  findDepartmentActive(id: string): Promise<Department> {
    throw new Error('Method not implemented.');
  }

  findGroupActive(id: string): Promise<Group> {
    throw new Error('Method not implemented.');
  }
}
