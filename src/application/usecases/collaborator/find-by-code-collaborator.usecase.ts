import { Inject, Injectable } from '@nestjs/common';
import { ICollaboratorRepository } from 'src/application/contracts';
import { TOKENS } from 'src/infra/container';
import { CollaboratorViewModel } from 'src/infra/http/view-models/collaborator';

@Injectable()
export class GetCollaboratorByCodeUseCase {
  constructor(
    @Inject(TOKENS.repositories.COLLABORATORS)
    private readonly _collaboratorRepository: ICollaboratorRepository,
  ) {}

  async execute({
    code,
  }: GetCollaboratorByCodeInput): Promise<GetCollaboratorByCodeOutput> {
    const Collaborator = await this._collaboratorRepository.findByCode(code);

    if (!Collaborator)
      throw new Error(`Not Found Collaborator with code ${code}`);

    return { data: CollaboratorViewModel.toHttp(Collaborator) };
  }
}

export type GetCollaboratorByCodeInput = {
  code: string;
};

export type GetCollaboratorByCodeOutput = {
  data: CollaboratorViewModel;
};
