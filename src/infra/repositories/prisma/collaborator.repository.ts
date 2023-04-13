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

  async save(data: Collaborator): Promise<void> {
    const raw = PrismaCollaboratorMapper.toPrisma(data);
    //const rawGroups = PrismaGroupMapper.toPrisma(data.group);
    // const rawDepartments = PrismaDepartmentMapper.toPrismaList(data.department);
    // const rawAddresses = PrismaAddressMapper.toPrisma(data.address);
    // const rawDocuments = PrismaDocumentMapper.toPrisma(data.documents);

    await this._prismaClient.collaborators.create({
      data: {
        ...raw,
        group: {
          //connect: data.group,
          create: PrismaGroupMapper.toPrisma(data.group),
        },
        department: {
          connect: {},
          create: data.department,
        },
        address: {
          create: data.address,
        },
        document: {
          create: PrismaDocumentMapper.toPrisma(data.documents),
        },
      },
      // include: {
      //   group: true,
      //   department: true,
      //   address: true,
      //   document: true,
      // },
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
