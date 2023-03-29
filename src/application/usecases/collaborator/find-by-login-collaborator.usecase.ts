import { Inject, Injectable } from '@nestjs/common';
import { ICollaboratorsRepository } from 'src/application/contracts';
import { TOKENS } from 'src/infra/container';
import { GetCollaboratorIdViewModel } from 'src/infra/http/view-models/collaborator';

@Injectable()
export class GetCollaboratorByLoginUseCase {
  constructor(
    @Inject(TOKENS.repositories.COLLABORATORS)
    private readonly _collaboratorRepository: ICollaboratorsRepository,
  ) {}

  async execute({
    login,
  }: GetCollaboratorByLoginInput): Promise<GetCollaboratorByLoginOutput> {
    const Collaborator = await this._collaboratorRepository.findByLogin(login);

    if (!Collaborator)
      throw new Error(`There is no collaborator with this login ${login}`);

    return { data: GetCollaboratorIdViewModel.toHttp(Collaborator) };
  }
}

export type GetCollaboratorByLoginInput = {
  login: string;
};

export type GetCollaboratorByLoginOutput = {
  data: GetCollaboratorIdViewModel;
};
