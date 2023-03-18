import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GroupService } from './group.service';
import { RegisterGroupDto } from './dtos/register-group.dto';

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
}
