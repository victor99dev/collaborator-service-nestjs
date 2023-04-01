import { Injectable } from '@nestjs/common';
import {
  CreateDepartmentUseCase,
  GetDepartmentByCodeUseCase,
  GetDepartmentByCodeInput,
  GetDepartmentByCodeOutput,
  ListDepartmentOutput,
  ListDepartmentUseCase,
  UpdateDepartmentUseCase,
  DeleteDepartmentUseCase,
  DepartmentOutput,
} from 'src/application/usecases/department';

@Injectable()
export class DepartmentService {
  constructor(
    private _createDepartmentUseCase: CreateDepartmentUseCase,
    private _listDepartmentUsecase: ListDepartmentUseCase,
    private _getByCodeDepartmentUsecase: GetDepartmentByCodeUseCase,
    private _updateDepartmentUseCase: UpdateDepartmentUseCase,
    private _deleteDepartmentUseCase: DeleteDepartmentUseCase,
  ) {}

  async createDepartment(input: any): Promise<DepartmentOutput> {
    return this._createDepartmentUseCase.execute(input);
  }

  async getAll(): Promise<ListDepartmentOutput> {
    return await this._listDepartmentUsecase.execute();
  }

  async findByCode(
    input: GetDepartmentByCodeInput,
  ): Promise<GetDepartmentByCodeOutput> {
    return this._getByCodeDepartmentUsecase.execute(input);
  }

  async update(code, input: any): Promise<void> {
    return this._updateDepartmentUseCase.execute(code, input);
  }

  async remove(code): Promise<void> {
    return this._deleteDepartmentUseCase.execute(code);
  }
}
