import { Controller, Post, Body } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterCollaboratorDto } from '../../dtos/collaborators';

@ApiTags('Collaborator')
@Controller({
  path: 'collaborators',
})
export class CollaboratorController {
  constructor(private readonly _collaboratorService: CollaboratorService) {}

  @ApiOperation({ summary: 'Create a new Collaborator' })
  @Post('')
  async registerNewCollaborator(@Body() body: RegisterCollaboratorDto) {
    this._collaboratorService.createCollaborator({ ...body });
  }
}
