import { Injectable } from '@nestjs/common';
import { CreateDepartmentUseCase } from 'src/application/usecases/department';

@Injectable()
export class DepartmentService {
  constructor(private _createDepartmentUseCase: CreateDepartmentUseCase) {}

  async createDepartment(input: any): Promise<void> {
    await this._createDepartmentUseCase.execute(input);
  }
}
