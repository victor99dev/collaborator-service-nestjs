import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ICollaboratorRepository } from 'src/application/contracts';
import { Collaborator, Department, Group } from 'src/domain/entities';
import {
  PrismaAddressMapper,
  PrismaCollaboratorMapper,
  PrismaDepartmentMapper,
  PrismaDocumentMapper,
  PrismaGroupMapper,
} from 'src/infra/database/mappers';

@Injectable()
export class IPrismaCollaboratorRepository implements ICollaboratorRepository {
  constructor(private readonly _prismaClient: PrismaClient) {}

  async save(data: Collaborator): Promise<void> {
    const collaboratorMapper = PrismaCollaboratorMapper.toPrisma(data);
    const documentMapper = PrismaDocumentMapper.toPrisma(data.document);
    const addressMapper = PrismaAddressMapper.toPrisma(data.address);
    const departmentMapper = PrismaDepartmentMapper.toPrisma(data.department);
    const prismaGroupMapper = PrismaGroupMapper.toPrisma(data.group);

    await this._prismaClient.collaborators.create({
      data: {
        ...collaboratorMapper,
        document: { create: { ...documentMapper } },
        address: { create: { ...addressMapper } },
        department: { connect: { id: departmentMapper.id } },
        group: { connect: { id: prismaGroupMapper.id } },
      },
    });
  }

  update(code: string, data: any): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findByCode(code: string): Promise<Collaborator> {
    const collaborator = await this._prismaClient.collaborators.findUnique({
      where: { id: code },
      include: {
        document: true,
        address: true,
        department: true,
        group: true,
      },
    });

    if (!collaborator) {
      return null;
    } else {
      return PrismaCollaboratorMapper.toDomain(
        collaborator,
        collaborator.document,
        collaborator.address,
        collaborator.department,
        collaborator.group,
      );
    }
  }

  async findByLogin(login: string): Promise<Collaborator> {
    const collaboratorLogin = await this._prismaClient.collaborators.findFirst({
      where: { login: login },
      include: {
        document: true,
        address: true,
        department: true,
        group: true,
      },
    });

    if (!collaboratorLogin) {
      return null;
    } else {
      return PrismaCollaboratorMapper.toDomain(
        collaboratorLogin,
        collaboratorLogin.document,
        collaboratorLogin.address,
        collaboratorLogin.department,
        collaboratorLogin.group,
      );
    }
  }

  async count(): Promise<number> {
    return await this._prismaClient.collaborators.count();
  }

  async getAll(): Promise<Collaborator[]> {
    const collaborator = await this._prismaClient.collaborators.findMany({
      include: {
        document: true,
        address: true,
        department: true,
        group: true,
      },
    });

    const list: Collaborator[] = [];
    collaborator.map((collaboratorList) =>
      list.push(
        PrismaCollaboratorMapper.toDomain(
          collaboratorList,
          collaboratorList.document,
          collaboratorList.address,
          collaboratorList.department,
          collaboratorList.group,
        ),
      ),
    );

    return list;
  }

  async delete(code: string): Promise<void> {
    await this._prismaClient.collaborators.delete({
      where: { id: code },
    });
  }

  async findDepartmentActive(departmentId: string): Promise<Department> {
    const query = await this._prismaClient.departments.findFirst({
      where: {
        id: departmentId,
      },
    });

    return query != null ? PrismaDepartmentMapper.toDomain(query) : null;
  }

  async findGroupActive(groupId: string): Promise<Group> {
    const query = await this._prismaClient.groups.findFirst({
      where: {
        id: groupId,
      },
    });

    return query != null ? PrismaGroupMapper.toDomain(query) : null;
  }
}
