import { Inject } from '@nestjs/common';
import { IDepartmentRepository } from 'src/application/contracts/repository';
import { TOKENS } from 'src/infra/container';
import { ListdepartmentViewModel } from 'src/infra/http/view-models/department';

export class ListDepartmentUseCase {
  constructor(
    @Inject(TOKENS.repositories.DEPARTMENTS)
    private readonly _departmentRepository: IDepartmentRepository,
  ) {}

  async execute() {
    const department = await this._departmentRepository.getAll();

    const total = await this._departmentRepository.count();

    return {
      data: ListdepartmentViewModel.toHttpList(department),
      metadata: {
        total,
        length: department.length,
      },
    };
  }
}

export type ListDepartmentOutput = {
  metadata: {
    [key: string]: unknown;
  };
  data: ListdepartmentViewModel[];
};
