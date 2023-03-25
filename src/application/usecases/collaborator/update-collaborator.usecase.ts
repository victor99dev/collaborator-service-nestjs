import { Inject, Injectable } from '@nestjs/common';
import { ICollaboratorsRepository } from 'src/application/contracts';
import { Collaborators } from 'src/domain/entities';
import { DocumentsType } from 'src/domain/enum';
import { TOKENS } from 'src/infra/container';
import { AddressDto, DocumentDto } from 'src/infra/http/dtos';

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

    name: data.name;
    email: data.email;
    age: data.age;
    department_id: data.departmentId;
    group_id: data.groupId;
    description: data.description;
    active: data.active;
    data.updatedAt = new Date();

    number: data.documents.number;
    type: data.documents.documentsType as DocumentsType;
    date_of_issue: data.documents.dateOfIssue;

    city: data.address.city;
    conty: data.address.country;
    number: data.address.number;
    state: data.address.state;
    street_address: data.address.streetAddress;

    return await this._collaboratorRepository.update(code, data);
  }
}
