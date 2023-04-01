import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ICollaboratorRepository } from 'src/application/contracts';
import { Collaborator } from 'src/domain/entities';
import { DocumentType } from 'src/domain/enums';
import { TOKENS } from 'src/infra/container';

@Injectable()
export class UpdateCollaboratorUseCase {
  constructor(
    @Inject(TOKENS.repositories.COLLABORATORS)
    private readonly _collaboratorRepository: ICollaboratorRepository,
  ) {}
  async execute(code: string, data: Collaborator) {
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
    data.documents.documentsType as DocumentType;
    data.documents.dateOfIssue;

    data.address.city;
    data.address.country;
    data.address.number;
    data.address.state;
    data.address.streetAddress;

    return await this._collaboratorRepository.update(code, data);
  }
}
