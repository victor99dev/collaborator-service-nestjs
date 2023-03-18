import { Inject, Injectable } from '@nestjs/common';
import { IDepartmentRepository } from 'src/application/contracts/repository';
import { Departments } from 'src/domain/entities';
import { TOKENS } from 'src/infra/container';

//TODO: REVIEW AND IMPLEMENT THE UPDATE USECASE
@Injectable()
export class UpdateDepartmentUsecase {
  constructor(
    @Inject(TOKENS.repositories.DEPARTMENTS)
    private readonly _departmentRepository: IDepartmentRepository,
  ) {}

  async execute(code, data: Departments): Promise<Departments> {
    await this._departmentRepository.findByCode(code);

    const updatedUser = await this._departmentRepository.update(code, data);

    return updatedUser;
  }
}
