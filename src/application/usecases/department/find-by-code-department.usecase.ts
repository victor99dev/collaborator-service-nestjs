import { Inject, Injectable } from '@nestjs/common';
import { IDepartmentRepository } from 'src/application/contracts/repository';
import { Departments } from 'src/domain/entities';
import { TOKENS } from 'src/infra/container';

@Injectable()
export class GetDepartmentByCodeUseCase {
  constructor(
    @Inject(TOKENS.repositories.DEPARTMENTS)
    private readonly _grdRepository: IDepartmentRepository,
  ) {}

  async execute({
    code,
  }: GetDepartmentByCodeInput): Promise<GetDepartmentByCodeOutput> {
    const data = await this._grdRepository.findByCode(code);

    return { data: data };
  }
}

export type GetDepartmentByCodeInput = {
  code: string;
};

export type GetDepartmentByCodeOutput = {
  data: Departments;
};
