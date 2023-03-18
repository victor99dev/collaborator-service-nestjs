import { Injectable } from '@nestjs/common';
import {
  CreateDepartmentUseCase,
  GetDepartmentByCodeUseCase,
  GetDepartmentByCodeInput,
  GetDepartmentByCodeOutput,
  ListDepartmentOutput,
  ListDepartmentUseCase,
  UpdateDepartmentUsecase,
} from 'src/application/usecases/department';

@Injectable()
export class DepartmentService {
  constructor(
    private _createDepartmentUseCase: CreateDepartmentUseCase,
    private _listDepartmentUsecase: ListDepartmentUseCase,
    private _getByCodeDepartmentUsecase: GetDepartmentByCodeUseCase,
    private _updateDepartmentUseCase: UpdateDepartmentUsecase,
  ) {}

  async createDepartment(input: any): Promise<void> {
    return this._createDepartmentUseCase.execute(input);
  }

  async getAll(): Promise<ListDepartmentOutput> {
    return this._listDepartmentUsecase.execute();
  }

  async findByCode(
    input: GetDepartmentByCodeInput,
  ): Promise<GetDepartmentByCodeOutput> {
    const output = await this._getByCodeDepartmentUsecase.execute(input);

    return output;
  }

  async update(code, input: any): Promise<void> {
    const getDepartmentId = await this._getByCodeDepartmentUsecase.execute({
      code,
    });

    await this._updateDepartmentUseCase.execute(getDepartmentId, input);
  }
}
