import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterDepartmentDto } from './dto';
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
}
