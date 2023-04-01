import { Module } from '@nestjs/common';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import {
  CreateDepartmentUseCase,
  DeleteDepartmentUseCase,
  GetDepartmentByCodeUseCase,
  ListDepartmentUseCase,
  UpdateDepartmentUseCase,
} from 'src/application/usecases/department';
import { IMemoryDepartmentRepository } from 'src/infra/repositories/in-memory';
import { IPrismaDepartmentRepository } from 'src/infra/repositories/prisma';
import { connection } from 'src/infra/database';
import { TOKENS } from 'src/infra/container';

@Module({
  controllers: [DepartmentController],
  providers: [
    // {
    //   provide: TOKENS.repositories.DEPARTMENTS,
    //   useFactory: () => new IMemoryDepartmentRepository(),
    // },
    {
      provide: TOKENS.repositories.DEPARTMENTS,
      useFactory: () => new IPrismaDepartmentRepository(connection),
    },
    DepartmentService,
    CreateDepartmentUseCase,
    ListDepartmentUseCase,
    GetDepartmentByCodeUseCase,
    UpdateDepartmentUseCase,
    DeleteDepartmentUseCase,
  ],
})
export class DepartmentModule {}
