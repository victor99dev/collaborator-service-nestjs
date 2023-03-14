import { Injectable } from '@nestjs/common';
import {
  CreateDepartmentUseCase,
  ListDepartmentOutput,
  ListDepartmentUseCase,
} from 'src/application/usecases/department';

@Injectable()
export class DepartmentService {
  constructor(
    private _createDepartmentUseCase: CreateDepartmentUseCase,
    private _listDepartmentService: ListDepartmentUseCase,
  ) {}

  async createDepartment(input: any): Promise<void> {
    await this._createDepartmentUseCase.execute(input);
  }

  async getAll(): Promise<ListDepartmentOutput> {
    return await this._listDepartmentService.execute();
  }
}
