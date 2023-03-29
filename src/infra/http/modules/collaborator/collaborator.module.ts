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

@Module({
  controllers: [CollaboratorController],
  providers: [
    {
      provide: TOKENS.repositories.COLLABORATORS,
      useFactory: () => new IMemoryCollaboratorRepository(),
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
