import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { DepartmentService } from './department.service';
import {
  RegisterDepartmentDto,
  UpdateDepartmentDto,
} from '../../dtos/departments';
import { HttpExceptionFilter } from '../../Exeptions';

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
    const getDepartmentAll = await this._departmentService.getAll();
    return getDepartmentAll;
  }

  @ApiOperation({ summary: 'Get Department by code' })
  @ApiParam({ name: 'code', required: true })
  @UseFilters(HttpExceptionFilter)
  @Get(':code')
  async findByCode(@Param() params) {
    const getDepartmentById = await this._departmentService.findByCode({
      code: params.code,
    });

    return getDepartmentById;
  }

  @ApiOperation({ summary: 'Updated a Department' })
  @ApiParam({ name: 'code', required: true })
  @UseFilters(HttpExceptionFilter)
  @Put(':code')
  async update(@Param() params, @Body() body: UpdateDepartmentDto) {
    const updateDepartment = this._departmentService.update(params.code, body);

    return updateDepartment;
  }

  @ApiOperation({ summary: 'Deleted a Department' })
  @ApiParam({ name: 'code', required: true })
  @UseFilters(HttpExceptionFilter)
  @Delete(':code')
  async remove(@Param() params) {
    const deleteDepartment = this._departmentService.remove(params.code);

    return deleteDepartment;
  }
}
