import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
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

  @ApiOperation({ summary: 'List Collaborator' })
  @Get('list')
  async getAll() {
    const getCollaboratorAll = await this._collaboratorService.getAll();
    return getCollaboratorAll;
  }

  @ApiOperation({ summary: 'Get Collaborator by code' })
  @ApiParam({ name: 'code', required: true })
  @Get(':code')
  async findByCode(@Param() params) {
    const getCollaboratorById = await this._collaboratorService.findByCode({
      code: params.code,
    });

    return getCollaboratorById;
  }
}
