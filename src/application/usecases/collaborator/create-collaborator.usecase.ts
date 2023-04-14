import { Inject, Injectable } from '@nestjs/common';
import { ICollaboratorRepository } from 'src/application/contracts';
import { Collaborator, Department, Group } from 'src/domain/entities';
import { DocumentType } from 'src/domain/enums';
import { Address, Document } from 'src/domain/value-objects';
import { TOKENS } from 'src/infra/container';
import { AddressDto, DocumentDto } from 'src/infra/http/dtos';
import { CollaboratorViewModel } from 'src/infra/http/view-models/collaborator';

@Injectable()
export class CreateCollaboratorUseCase {
  constructor(
    @Inject(TOKENS.repositories.COLLABORATORS)
    private readonly _collaboratorRepository: ICollaboratorRepository,
  ) {}

  async execute(param: CollaboratorInput): Promise<CollaboratorOutput> {
    const document = new Document({
      documentType: param.documents.type as DocumentType,
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

    const output = new Collaborator({
      name: param.name,
      email: param.email,
      age: param.age,
      department: param.department_id,
      group: new Group(param.group_id),
      login: param.login,
      password: param.password,
      description: param.description,
      active: param.active,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    output.SetDocuments(document);
    output.SetAnddress(address);

    // const login = await this._collaboratorRepository.findByLogin(param.login);

    // if (login) {
    //   throw new Error(`Login already exists: ${param.login}`);
    // }

    this._collaboratorRepository.save(output);

    return { data: CollaboratorViewModel.toHttp(output) };
  }
}

export interface CollaboratorInput {
  name: string;
  email: string;
  age: string;
  department_id: Department[];
  group_id: Group;
  documents: DocumentDto | null;
  address: AddressDto | null;
  login: string;
  password: string;
  description: string;
  active: boolean;
}

export type CollaboratorOutput = {
  data: CollaboratorViewModel;
};
