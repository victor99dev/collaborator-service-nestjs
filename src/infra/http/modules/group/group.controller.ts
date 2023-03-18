import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { GroupService } from './group.service';
import { RegisterGroupDto } from './dtos/register-group.dto';
import {
  GetGroupIdViewModel,
  ListGroupViewModel,
} from '../../view-models/group';

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
    const group = await this._groupService.getAll();
    return {
      data: ListGroupViewModel.toHttpList(group.data),
    };
  }

  @ApiOperation({ summary: 'Get Group by code' })
  @ApiParam({ name: 'code', required: true })
  @Get(':code')
  async findByCode(@Param() params) {
    const groupById = await this._groupService.findByCode({
      code: params.code,
    });

    return {
      data: GetGroupIdViewModel.toHttp(groupById.data),
    };
  }
}
