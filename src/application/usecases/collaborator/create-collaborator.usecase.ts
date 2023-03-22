import { Inject, Injectable } from '@nestjs/common';
import { ICollaboratorsRepository } from 'src/application/contracts';
import { Collaborators } from 'src/domain/entities';
import { DocumentsType } from 'src/domain/enum';
import { Address, Documents } from 'src/domain/value-object';
import { TOKENS } from 'src/infra/container';
import { AddressDto, DocumentDto } from 'src/infra/http/dtos';

@Injectable()
export class CreateCollaboratorUseCase {
  constructor(
    @Inject(TOKENS.repositories.COLLABORATORS)
    private readonly _collaboratorRepository: ICollaboratorsRepository,
  ) {}

  async execute(param: CollaboratorInput): Promise<void> {
    const document = new Documents({
      documentsType: param.documents.type as DocumentsType,
      number: param.documents.number,
      dateOfIssue: param.documents.date_of_issue,
    });

    const address = new Address({
      streetAddress: param.address.street_address,
      number: param.address.number,
      city: param.address.city,
      state: param.address.state,
      country: param.address.country,
    });

    const output = new Collaborators({
      name: param.name,
      email: param.email,
      age: param.age,
      departmentId: param.department_id,
      groupId: param.group_id,
      login: param.login,
      password: param.password,
      description: param.description,
      active: param.active,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    output.SetDocuments(document);
    output.SetAnddress(address);

    this._collaboratorRepository.save(output);
  }
}

export interface CollaboratorInput {
  name: string;
  email: string;
  age: string;
  documents: DocumentDto | null;
  department_id: string[];
  group_id: string;
  address: AddressDto | null;
  login: string;
  password: string;
  description: string;
  active: boolean;
}

export type CollaboratorOutput = {
  output: Collaborators;
};
