import { Inject, Injectable } from '@nestjs/common';
import { ICollaboratorsRepository } from 'src/application/contracts';
import { Collaborators } from 'src/domain/entities';
import { DocumentsType } from 'src/domain/enum';
import { Address, Documents, SocialMedia } from 'src/domain/value-object';
import { TOKENS } from 'src/infra/container';
import { AddressDto, DocumentDto, SocialMediaDto } from 'src/infra/http/dtos';

//TODO: Check, refactor and deploy what is null

@Injectable()
export class CreateCollaboratorUseCase {
  constructor(
    @Inject(TOKENS.repositories.COLLABORATORS)
    private readonly _collaboratorRepository: ICollaboratorsRepository,
  ) {}

  async execute(param: CollaboratorInput): Promise<void> {
    //TODO: Check if it will work, if yes, apply to

    const document = new Documents({
      documentsType: 'cpf' as DocumentsType,
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

    const _socialMedia: SocialMedia[] = [];
    param.socialMedia.forEach((_socialMedia) => {
      new SocialMedia({
        name: _socialMedia.name,
        url: _socialMedia.url,
      });
    });

    const output = new Collaborators({
      name: param.name,
      email: param.email,
      age: param.age,
      documents: new Documents(document) || null,
      departmentId: param.departmentId,
      groupId: param.groupId,
      address: new Address(address) || null,
      socialMedia: _socialMedia || null,
      login: param.login,
      password: param.password,
      description: param.description,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this._collaboratorRepository.save(output);
  }
}

export interface CollaboratorInput {
  name: string;
  email: string;
  age: string;
  documents: DocumentDto | null;
  departmentId: string[];
  groupId: string;
  address: AddressDto | null;
  socialMedia: SocialMediaDto[] | null;
  login: string;
  password: string;
  description: string;
  active: boolean;
}

export type CollaboratorOutput = {
  output: Collaborators;
};
