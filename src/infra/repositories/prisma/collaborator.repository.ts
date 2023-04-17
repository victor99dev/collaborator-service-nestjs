import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ICollaboratorRepository } from 'src/application/contracts';
import { Collaborator } from 'src/domain/entities';
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

  async save(data: Collaborator) {
    const raw = PrismaCollaboratorMapper.toPrisma(data);
    const rawDocuments = PrismaDocumentMapper.toPrisma(data.document);
    const rawDepartments = PrismaDepartmentMapper.toPrisma(data.department);
    const rawAddresses = PrismaAddressMapper.toPrisma(data.address);
    const rawGroups = PrismaGroupMapper.toPrisma(data.group);

    await this._prismaClient.collaborators.create({
      data: {
        ...raw,
        department: { connect: { id: rawDepartments.id } },
        group: { connect: { id: rawGroups.id } },
        address: { create: rawAddresses },
        document: { create: rawDocuments },
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

  findByLogin(login: string): Promise<Collaborator> {
    throw new Error('Method not implemented.');
  }

  async count(): Promise<number> {
    return await this._prismaClient.collaborators.count();
  }

  getAll(): Promise<Collaborator[]> {
    throw new Error('Method not implemented.');
  }

  delete(code: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
