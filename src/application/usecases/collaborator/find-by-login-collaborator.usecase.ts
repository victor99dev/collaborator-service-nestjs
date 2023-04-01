import { Inject, Injectable } from '@nestjs/common';
import { ICollaboratorRepository } from 'src/application/contracts';
import { TOKENS } from 'src/infra/container';
import { CollaboratorViewModel } from 'src/infra/http/view-models/collaborator';

@Injectable()
export class GetCollaboratorByLoginUseCase {
  constructor(
    @Inject(TOKENS.repositories.COLLABORATORS)
    private readonly _collaboratorRepository: ICollaboratorRepository,
  ) {}

  async execute({
    login,
  }: GetCollaboratorByLoginInput): Promise<GetCollaboratorByLoginOutput> {
    const Collaborator = await this._collaboratorRepository.findByLogin(login);

    if (!Collaborator)
      throw new Error(`There is no collaborator with this login ${login}`);

    return { data: CollaboratorViewModel.toHttp(Collaborator) };
  }
}

export type GetCollaboratorByLoginInput = {
  login: string;
};

export type GetCollaboratorByLoginOutput = {
  data: CollaboratorViewModel;
};
