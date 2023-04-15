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
    const rawDocument = PrismaDocumentMapper.toPrisma(data.document);

    await this._prismaClient.collaborators.create({
      data: {
        ...raw,
        department: { connect: raw.department },
        group: { create: raw.group },
        address: { create: raw.address },
        document: { create: rawDocument },
      },
    });
  }

  update(code: string, data: any): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findByCode(code: string): Promise<Collaborator> {
    throw new Error('Method not implemented.');
    // const collaborator = await this._prismaClient.collaborators.findUnique({
    //   where: { id: code },
    //   include: {
    //     group: true,
    //     department: true,
    //     address: true,
    //     document: true,
    //   },
    // });
    // if (!collaborator) {
    //   return null;
    // } else {
    //   return PrismaCollaboratorMapper.toDomain(collaborator);
    // }
  }

  findByLogin(login: string): Promise<Collaborator> {
    throw new Error('Method not implemented.');
  }

  count(): Promise<number> {
    throw new Error('Method not implemented.');
  }

  getAll(): Promise<Collaborator[]> {
    throw new Error('Method not implemented.');
  }

  delete(code: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
