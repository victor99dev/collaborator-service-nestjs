import { Inject, Injectable } from '@nestjs/common';
import { ICollaboratorsRepository } from 'src/application/contracts';
import { Collaborators } from 'src/domain/entities';
import { TOKENS } from 'src/infra/container';

@Injectable()
export class UpdateCollaboratorUseCase {
  constructor(
    @Inject(TOKENS.repositories.COLLABORATORS)
    private readonly _collaboratorRepository: ICollaboratorsRepository,
  ) {}
  async execute(code: string, data: Collaborators) {
    const codeReturn = await this._collaboratorRepository.findByCode(code);

    if (!codeReturn)
      throw new Error(`Not Found Collaborator with code ${code}`);

    //TODO: implement this method update

    return await this._collaboratorRepository.update(code, data);
  }
}
