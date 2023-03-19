import { ListDepartmentUseCase } from '../../../../application/usecases/department/list-department.usecase';
import { TOKENS } from './../../../container/tokens';
import { Module } from '@nestjs/common';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import {
  CreateDepartmentUseCase,
  DeleteDepartmentUsecase,
  GetDepartmentByCodeUseCase,
  UpdateDepartmentUsecase,
} from 'src/application/usecases/department';
import { IMemoryDepartmentRepository } from 'src/infra/repositories/in-memory';

@Module({
  controllers: [DepartmentController],
  providers: [
    {
      provide: TOKENS.repositories.DEPARTMENTS,
      useFactory: () => new IMemoryDepartmentRepository(),
    },
    DepartmentService,
    CreateDepartmentUseCase,
    ListDepartmentUseCase,
    GetDepartmentByCodeUseCase,
    UpdateDepartmentUsecase,
    DeleteDepartmentUsecase,
  ],
})
export class DepartmentModule {}
