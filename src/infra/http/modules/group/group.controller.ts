import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GroupService } from './group.service';
import { RegisterGroupDto } from './dtos/register-group.dto';
import { ListGroupViewModel } from '../../view-models/group';

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
}
