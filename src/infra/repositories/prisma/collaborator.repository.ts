import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ICollaboratorRepository } from 'src/application/contracts';
import { Collaborator } from 'src/domain/entities';
import { PrismaCollaboratorMapper } from 'src/infra/database/mappers';

@Injectable()
export class IPrismaCollaboratorRepository implements ICollaboratorRepository {
  constructor(private readonly _prismaClient: PrismaClient) {}

  save(data: Collaborator): Promise<void> {
    throw new Error('Method not implemented.');
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
}
