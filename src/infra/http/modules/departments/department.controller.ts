import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { DepartmentService } from './department.service';
import {
  GetDepartmentIdViewModel,
  ListdepartmentViewModels,
} from '../../view-models/department';
import { RegisterDepartmentDto } from './dtos';

@ApiTags('Department Environment')
@Controller({
  path: 'departments',
})
export class DepartmentController {
  constructor(private readonly _departmentService: DepartmentService) {}

  @ApiOperation({ summary: 'Create a new Department' })
  @Post('')
  async registerNewDepartment(@Body() body: RegisterDepartmentDto) {
    this._departmentService.createDepartment({ ...body });
  }

  @ApiOperation({ summary: 'List Departments' })
  @Get('list')
  async getAll() {
    const department = await this._departmentService.getAll();
    return {
      data: ListdepartmentViewModels.toHttpList(department.data),
    };
  }

  @ApiOperation({ summary: 'Get Department by code' })
  @ApiParam({ name: 'code', required: true })
  @Get(':code')
  async findByCode(@Param() params) {
    const departmentById = await this._departmentService.findByCode({
      code: params.code,
    });

    return {
      data: GetDepartmentIdViewModel.toHttp(departmentById.data),
    };
  }
}
