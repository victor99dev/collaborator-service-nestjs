import { Module } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { CollaboratorController } from './collaborator.controller';
import { TOKENS } from 'src/infra/container';
import { IMemoryCollaboratorRepository } from 'src/infra/repositories/in-memory';
import {
  CreateCollaboratorUseCase,
  ListCollaboratorUseCase,
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
  ],
})
export class CollaboratorModule {}
