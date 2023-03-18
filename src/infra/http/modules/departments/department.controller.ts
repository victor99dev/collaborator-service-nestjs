import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import {
  GetDepartmentIdViewModel,
  ListdepartmentViewModels,
} from '../../view-models/department';
import { RegisterDepartmentDto } from './dtos';
import { DepartmentService } from './department.service';
import { UpdateDepartmentDto } from './dtos/update-department.dto';

@ApiTags('Department')
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

  @ApiOperation({ summary: 'Updated a Department' })
  @ApiParam({ name: 'code', required: true })
  @Put(':code')
  async update(@Param() params, @Body() body: UpdateDepartmentDto) {
    await this._departmentService.update(params.code, body);
  }
}
