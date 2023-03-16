import { Inject } from '@nestjs/common';
import { IDepartmentRepository } from 'src/application/contracts/repository';
import { Departments } from 'src/domain/entities';
import { TOKENS } from 'src/infra/container';

export type ListDepartmentOutput = {
  metadata: {
    [key: string]: unknown;
  };
  data: Departments[];
};

export class ListDepartmentUseCase {
  constructor(
    @Inject(TOKENS.repositories.DEPARTMENTS)
    private readonly _departmentRepository: IDepartmentRepository,
  ) {}

  async execute() {
    const department = await this._departmentRepository.getAll();

    const total = await this._departmentRepository.count();

    return {
      data: department,
      metadata: {
        total,
        length: department.length,
      },
    };
  }
}
