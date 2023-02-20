import { TOKENS } from './../../../infra/container/tokens';
import { Inject, Injectable } from '@nestjs/common';
import { IDepartmentsReadRepository } from 'src/application/contracts/repository';
import { UseCaseInterface } from 'src/application/contracts/usecase';
import { Departments } from 'src/domain/entities';

export interface DepartmentsInput {
  name: string;
  description: string;
  active: boolean;
  isDeleted: boolean;
}

export type DepartmentsOutput = {
  output: Departments;
};

@Injectable()
export class CreateDepartmentUseCase{
  constructor(
    @Inject(TOKENS.repositories.DEPARTMENTS)
    private readonly _departmentRepository: IDepartmentsReadRepository,
  ) {}

  async execute(param: DepartmentsInput): Promise<void> {
    const output = new Departments({
      name: param.name,
      description: param.description,
      active: true,
      isDeleted: false,
    });

    this._departmentRepository.save(output);
  }
}
