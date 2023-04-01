import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { IDepartmentRepository } from 'src/application/contracts';
import { Department } from 'src/domain/entities';
import { TOKENS } from 'src/infra/container';
import { DepartmentViewModel } from 'src/infra/http/view-models/department';

@Injectable()
export class CreateDepartmentUseCase {
  constructor(
    @Inject(TOKENS.repositories.DEPARTMENTS)
    private readonly _departmentRepository: IDepartmentRepository,
  ) {}

  async execute(param: DepartmentInput): Promise<DepartmentOutput> {
    const output = new Department({
      name: param.name,
      description: param.description,
      active: param.active,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this._departmentRepository.save(output);

    return { data: DepartmentViewModel.toHttp(output) };
  }
}

export interface DepartmentInput {
  name: string;
  description: string;
  active: boolean;
}

export type DepartmentOutput = {
  data: DepartmentViewModel;
};
