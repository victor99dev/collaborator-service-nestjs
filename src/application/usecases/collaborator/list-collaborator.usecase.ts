import { Inject } from '@nestjs/common';
import { ICollaboratorRepository } from 'src/application/contracts';
import { TOKENS } from 'src/infra/container';
import { ListCollaboratorViewModel } from 'src/infra/http/view-models/collaborator';

export class ListCollaboratorUseCase {
  constructor(
    @Inject(TOKENS.repositories.COLLABORATORS)
    private readonly _collaboratorRepository: ICollaboratorRepository,
  ) {}

  async execute() {
    const collaborator = await this._collaboratorRepository.getAll();

    const total = await this._collaboratorRepository.count();

    return {
      data: ListCollaboratorViewModel.toHttpList(collaborator),
      metadata: {
        total,
        length: collaborator.length,
      },
    };
  }
}

export type ListCollaboratorOutput = {
  metadata: {
    [key: string]: unknown;
  };
  data: ListCollaboratorViewModel[];
};
