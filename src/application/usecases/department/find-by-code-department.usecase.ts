import { Inject, Injectable } from '@nestjs/common';
import { IDepartmentRepository } from 'src/application/contracts';
import { TOKENS } from 'src/infra/container';
import { GetDepartmentIdViewModel } from 'src/infra/http/view-models/department';

@Injectable()
export class GetDepartmentByCodeUseCase {
  constructor(
    @Inject(TOKENS.repositories.DEPARTMENTS)
    private readonly _departmentRepository: IDepartmentRepository,
  ) {}

  async execute({
    code,
  }: GetDepartmentByCodeInput): Promise<GetDepartmentByCodeOutput> {
    const department = await this._departmentRepository.findByCode(code);

    if (!department) throw new Error(`Not Found Department with code ${code}`);

    return { data: GetDepartmentIdViewModel.toHttp(department) };
  }
}

export type GetDepartmentByCodeInput = {
  code: string;
};

export type GetDepartmentByCodeOutput = {
  data: GetDepartmentIdViewModel;
};
