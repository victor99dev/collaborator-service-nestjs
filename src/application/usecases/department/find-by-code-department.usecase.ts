import { Inject, Injectable } from '@nestjs/common';
import { IDepartmentRepository } from 'src/application/contracts/repository';
import { TOKENS } from 'src/infra/container';
import { GetDepartmentIdViewModel } from 'src/infra/http/view-models/department';

@Injectable()
export class GetDepartmentByCodeUseCase {
  constructor(
    @Inject(TOKENS.repositories.DEPARTMENTS)
    private readonly _grdRepository: IDepartmentRepository,
  ) {}

  async execute({
    code,
  }: GetDepartmentByCodeInput): Promise<GetDepartmentByCodeOutput> {
    const department = await this._grdRepository.findByCode(code);

    return { data: GetDepartmentIdViewModel.toHttp(department) };
  }
}

export type GetDepartmentByCodeInput = {
  code: string;
};

export type GetDepartmentByCodeOutput = {
  data: GetDepartmentIdViewModel;
};
