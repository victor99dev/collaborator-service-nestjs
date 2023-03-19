import { Inject, Injectable } from '@nestjs/common';
import { IDepartmentRepository } from 'src/application/contracts/repository';
import { TOKENS } from 'src/infra/container';
@Injectable()
export class DeleteDepartmentUsecase {
  constructor(
    @Inject(TOKENS.repositories.DEPARTMENTS)
    private readonly _departmentRepository: IDepartmentRepository,
  ) {}

  async execute(code: string): Promise<void> {
    const codeReturn = await this._departmentRepository.findByCode(code);

    if (!codeReturn) throw new Error(`Not Found Department with code ${code}`);

    return await this._departmentRepository.delete(code);
  }
}
