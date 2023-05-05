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
import { GroupService } from './group.service';
import { RegisterGroupDto, UpdateGroupDto } from '../../dtos/groups';
import { HttpExceptionNotFound } from '../../Exceptions';

@ApiTags('Group')
@Controller({
  path: 'groups',
})
export class GroupController {
  constructor(private readonly _groupService: GroupService) {}

  @ApiOperation({ summary: 'Create a new Group' })
  @Post('')
  async registerNewGroup(@Body() body: RegisterGroupDto) {
    const create = this._groupService.createGroup({ ...body });
    return create;
  }

  @ApiOperation({ summary: 'List Groups' })
  @Get('list')
  async getAll() {
    const getGroupAll = await this._groupService.getAll();

    return getGroupAll;
  }

  @ApiOperation({ summary: 'Get Group by code' })
  @ApiParam({ name: 'code', required: true })
  @UseFilters(HttpExceptionNotFound)
  @Get(':code')
  async findByCode(@Param() params) {
    const getGroupById = await this._groupService.findByCode({
      code: params.code,
    });

    return getGroupById;
  }

  @ApiOperation({ summary: 'Updated a Group' })
  @ApiParam({ name: 'code', required: true })
  @UseFilters(HttpExceptionNotFound)
  @Put(':code')
  async update(@Param() params, @Body() body: UpdateGroupDto) {
    const updateGroup = this._groupService.update(params.code, body);

    return updateGroup;
  }

  @ApiOperation({ summary: 'Deleted a Group' })
  @ApiParam({ name: 'code', required: true })
  @UseFilters(HttpExceptionNotFound)
  @Delete(':code')
  async remove(@Param() params) {
    const deleteGroup = this._groupService.remove(params.code);

    return deleteGroup;
  }
}
