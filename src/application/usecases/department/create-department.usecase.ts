import { TOKENS } from '../../../infra/container/tokens';
import { Inject, Injectable } from '@nestjs/common';
import { IDepartmentsRepository } from 'src/application/contracts/repository';
import { Departments } from 'src/domain/entities';

export interface DepartmentsInput {
  name: string;
  description: string;
  active: boolean;
}

export type DepartmentsOutput = {
  output: Departments;
};

@Injectable()
export class CreateDepartmentUseCase {
  constructor(
    @Inject(TOKENS.repositories.DEPARTMENTS)
    private readonly _departmentRepository: IDepartmentsRepository,
  ) {}

  async execute(param: DepartmentsInput): Promise<void> {
    const output = new Departments({
      name: param.name,
      description: param.description,
      active: true,
    });

    this._departmentRepository.save(output);
  }
}
