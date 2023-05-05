import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IGroupRepository } from 'src/application/contracts';
import { Department, Group } from 'src/domain/entities';
import { PrismaGroupMapper } from 'src/infra/database/mappers';

@Injectable()
export class IPrismaGroupRepository implements IGroupRepository {
  constructor(private readonly _prismaClient: PrismaClient) {}

  async save(data: Group): Promise<void> {
    const groupMapper = PrismaGroupMapper.toPrisma(data);

    await this._prismaClient.groups.create({
      data: { ...groupMapper },
    });
  }

  async update(code: string, data: any): Promise<void> {
    const groupMapper = PrismaGroupMapper.toPrisma(data);

    await this._prismaClient.groups.update({
      where: { id: code },
      data: { ...groupMapper },
    });
  }

  async findByCode(code: string): Promise<Group> {
    const group = await this._prismaClient.groups.findUnique({
      where: { id: code },
    });
    if (!group) {
      return null;
    } else {
      return PrismaGroupMapper.toDomain(group);
    }
  }

  findByLogin(login: string): Promise<Group> {
    throw new Error('Method not implemented.');
  }

  async count(): Promise<number> {
    return await this._prismaClient.groups.count();
  }

  async getAll(): Promise<Group[]> {
    const group = await this._prismaClient.groups.findMany();

    const list: Group[] = [];
    group.map((x) => list.push(PrismaGroupMapper.toDomain(x)));

    return list;
  }

  async delete(code: string): Promise<void> {
    await this._prismaClient.groups.delete({
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
