import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ICollaboratorsRepository } from 'src/application/contracts';
import { Collaborators } from 'src/domain/entities';
import { DocumentsType } from 'src/domain/enum';
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

    data.name;
    data.email;
    data.age;
    data.departmentId;
    data.groupId;
    data.description;
    data.active;
    data.updatedAt = new Date();

    data.documents.number;
    data.documents.documentsType as DocumentsType;
    data.documents.dateOfIssue;

    data.address.city;
    data.address.country;
    data.address.number;
    data.address.state;
    data.address.streetAddress;

    return await this._collaboratorRepository.update(code, data);
  }
}
