import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
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
    const getDepartmentAll = await this._departmentService.getAll();
    return getDepartmentAll;
  }

  @ApiOperation({ summary: 'Get Department by code' })
  @ApiParam({ name: 'code', required: true })
  @Get(':code')
  async findByCode(@Param() params) {
    const getDepartmentById = await this._departmentService.findByCode({
      code: params.code,
    });

    return getDepartmentById;
  }

  @ApiOperation({ summary: 'Updated a Department' })
  @ApiParam({ name: 'code', required: true })
  @Put(':code')
  async update(@Param() params, @Body() body: UpdateDepartmentDto) {
    this._departmentService.update(params.code, body);
  }

  @ApiOperation({ summary: 'Deleted a Department' })
  @ApiParam({ name: 'code', required: true })
  @Delete(':code')
  async remove(@Param() params) {
    this._departmentService.remove(params.code);
  }
}
