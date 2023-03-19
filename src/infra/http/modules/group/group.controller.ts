import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { GroupService } from './group.service';
import { RegisterGroupDto } from './dtos/register-group.dto';
import { UpdateGroupDto } from './dtos';

@ApiTags('Group')
@Controller({
  path: 'groups',
})
export class GroupController {
  constructor(private readonly _groupService: GroupService) {}

  @ApiOperation({ summary: 'Create a new Group' })
  @Post('')
  async registerNewGroup(@Body() body: RegisterGroupDto) {
    this._groupService.createGroup({ ...body });
  }

  @ApiOperation({ summary: 'List Groups' })
  @Get('list')
  async getAll() {
    const getGroupAll = await this._groupService.getAll();
    return getGroupAll;
  }

  @ApiOperation({ summary: 'Get Group by code' })
  @ApiParam({ name: 'code', required: true })
  @Get(':code')
  async findByCode(@Param() params) {
    const getGroupById = await this._groupService.findByCode({
      code: params.code,
    });

    return getGroupById;
  }

  @ApiOperation({ summary: 'Updated a Group' })
  @ApiParam({ name: 'code', required: true })
  @Put(':code')
  async update(@Param() params, @Body() body: UpdateGroupDto) {
    this._groupService.update(params.code, body);
  }
}
