import { Inject, Injectable } from '@nestjs/common';
import { ICollaboratorRepository } from 'src/application/contracts';
import { Collaborator, Department, Group } from 'src/domain/entities';
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

    const request: CollaboratorUpdateInput =
      data as unknown as CollaboratorUpdateInput;

    const { department_id, group_id } = request;

    const checkDepartmentExist =
      await this._collaboratorRepository.findDepartmentActive(department_id);

    const checkDepartment = checkDepartmentExist.id;

    const checkGroupExist = await this._collaboratorRepository.findGroupActive(
      group_id,
    );

    const checkGroup = checkGroupExist.id;

    data.name;
    data.email;
    data.age;
    data.department = new Department(
      checkDepartment as unknown as Department,
      checkDepartment as string,
    );
    data.group = new Group(
      checkGroup as unknown as Group,
      checkGroup as string,
    );
    data.description;
    data.active;
    data.updatedAt = new Date();
    data.document.number;
    data.document.documentType;
    data.document.dateOfIssue = new Date();

    data.address.city;
    data.address.country;
    data.address.number;
    data.address.state;
    data.address.streetAddress;

    return await this._collaboratorRepository.update(code, data);
  }
}

export interface CollaboratorUpdateInput {
  department_id: string;
  group_id: string;
}
