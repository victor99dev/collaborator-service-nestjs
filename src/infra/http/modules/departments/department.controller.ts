import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { RegisterDepartmentDto } from '../../../../application/dtos/departments';
import { DepartmentService } from './department.service';

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
    const result = await this._departmentService.getAll();
    return result;
  }

  @ApiOperation({ summary: 'Get Department by code' })
  @ApiParam({ name: 'code', required: true })
  @Get(':code')
  async findByCode(@Param() params) {
    const result = await this._departmentService.findByCode({
      code: params.code,
    });
    return result;
  }
}
