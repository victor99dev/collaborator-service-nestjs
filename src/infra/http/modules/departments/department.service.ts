import { Injectable } from '@nestjs/common';
import {
  CreateDepartmentUseCase,
  GetDepartmentByCode,
  GetDepartmentByCodeInput,
  GetDepartmentByCodeOutput,
  ListDepartmentOutput,
  ListDepartmentUseCase,
} from 'src/application/usecases/department';

@Injectable()
export class DepartmentService {
  constructor(
    private _createDepartmentUseCase: CreateDepartmentUseCase,
    private _listDepartmentService: ListDepartmentUseCase,
    private _getByCodeDepartmentService: GetDepartmentByCode,
  ) {}

  async createDepartment(input: any): Promise<void> {
    await this._createDepartmentUseCase.execute(input);
  }

  async getAll(): Promise<ListDepartmentOutput> {
    return await this._listDepartmentService.execute();
  }

  async findByCode(
    input: GetDepartmentByCodeInput,
  ): Promise<GetDepartmentByCodeOutput> {
    const output = await this._getByCodeDepartmentService.execute(input);

    return output;
  }
}
