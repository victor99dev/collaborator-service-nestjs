import { Inject, Injectable } from '@nestjs/common';
import { ICollaboratorRepository } from 'src/application/contracts';
import { Collaborator, Department, Group } from 'src/domain/entities';
import { DocumentType } from 'src/domain/enums';
import { Address, Contact, Document } from 'src/domain/value-objects';
import { TOKENS } from 'src/infra/container';
import { AddressDto, ContactDto, DocumentDto } from 'src/infra/http/dtos';
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

    const contact = new Contact({
      email: param.contact.email,
      telephone: param.contact.telephone,
      socialNetwork: param.contact.social_network,
    });

    const login = await this._collaboratorRepository.findByLogin(param.login);

    if (login) {
      throw new Error(`Login already exists: ${param.login}`);
    }

    const checkDepartmentExist =
      await this._collaboratorRepository.findDepartmentActive(
        param.department_id,
      );

    const checkDepartment = checkDepartmentExist.id;

    const checkGroupExist = await this._collaboratorRepository.findGroupActive(
      param.group_id,
    );

    const checkGroup = checkGroupExist.id;

    const output = new Collaborator({
      name: param.name,
      age: param.age,
      department: new Department(
        checkDepartment as unknown as Department,
        checkDepartment as string,
      ),
      group: new Group(checkGroup as unknown as Group, checkGroup as string),
      login: param.login,
      password: param.password,
      description: param.description,
      active: param.active,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    output.SetContact(contact);
    output.SetDocument(document);
    output.SetAnddress(address);

    this._collaboratorRepository.save(output);

    return { data: CollaboratorViewModel.toHttp(output) };
  }
}

export interface CollaboratorInput {
  name: string;
  age: string;
  contact: ContactDto | null;
  department_id: string;
  group_id: string;
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
