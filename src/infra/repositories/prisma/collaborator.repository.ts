import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ICollaboratorRepository } from 'src/application/contracts';
import { Collaborator } from 'src/domain/entities';

@Injectable()
export class IPrismaCollaboratorRepository implements ICollaboratorRepository {
  constructor(private readonly _prismaClient: PrismaClient) {}
  save(data: Collaborator): Promise<void> {
    throw new Error('Method not implemented.');
  }

  update(code: string, data: any): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findByCode(code: string): Promise<Collaborator> {
    throw new Error('Method not implemented.');
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
