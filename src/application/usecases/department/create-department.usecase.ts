import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { IDepartmentRepository } from 'src/application/contracts';
import { Department } from 'src/domain/entities';
import { TOKENS } from 'src/infra/container';

@Injectable()
export class CreateDepartmentUseCase {
  constructor(
    @Inject(TOKENS.repositories.DEPARTMENTS)
    private readonly _departmentRepository: IDepartmentRepository,
  ) {}

  async execute(param: DepartmentsInput): Promise<void> {
    const output = new Department({
      name: param.name,
      description: param.description,
      active: param.active,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this._departmentRepository.save(output);
  }
}

export interface DepartmentsInput {
  name: string;
  description: string;
  active: boolean;
}

export type DepartmentsOutput = {
  output: Department;
};
