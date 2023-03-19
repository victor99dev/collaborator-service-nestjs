import { Inject, Injectable } from '@nestjs/common';
import { IDepartmentRepository } from 'src/application/contracts/repository';
import { Departments } from 'src/domain/entities';
import { TOKENS } from 'src/infra/container';

@Injectable()
export class UpdateDepartmentUsecase {
  constructor(
    @Inject(TOKENS.repositories.DEPARTMENTS)
    private readonly _departmentRepository: IDepartmentRepository,
  ) {}

  async execute(code: string, data: Departments) {
    await this._departmentRepository.findByCode(code);

    data.name;
    data.description;
    data.active;
    data.updatedAt = new Date();

    return await this._departmentRepository.update(code, data);
  }
}
