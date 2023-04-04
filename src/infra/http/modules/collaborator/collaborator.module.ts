import { Module } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { CollaboratorController } from './collaborator.controller';
import { TOKENS } from 'src/infra/container';
import { IMemoryCollaboratorRepository } from 'src/infra/repositories/in-memory';
import {
  CreateCollaboratorUseCase,
  DeleteCollaboratorUseCase,
  GetCollaboratorByCodeUseCase,
  GetCollaboratorByLoginUseCase,
  ListCollaboratorUseCase,
  UpdateCollaboratorUseCase,
} from 'src/application/usecases/collaborator';
import { IPrismaCollaboratorRepository } from 'src/infra/repositories/prisma';
import { connection } from 'src/infra/database';

@Module({
  controllers: [CollaboratorController],
  providers: [
    // {
    //   provide: TOKENS.repositories.COLLABORATORS,
    //   useFactory: () => new IMemoryCollaboratorRepository(),
    // },
    {
      provide: TOKENS.repositories.DEPARTMENTS,
      useFactory: () => new IPrismaCollaboratorRepository(connection),
    },
    CollaboratorService,
    CreateCollaboratorUseCase,
    ListCollaboratorUseCase,
    GetCollaboratorByCodeUseCase,
    GetCollaboratorByLoginUseCase,
    UpdateCollaboratorUseCase,
    DeleteCollaboratorUseCase,
  ],
})
export class CollaboratorModule {}
