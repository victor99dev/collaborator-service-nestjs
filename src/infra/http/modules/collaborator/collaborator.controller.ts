import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import {
  RegisterCollaboratorDto,
  UpdateCollaboratorDto,
} from '../../dtos/collaborators';

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

  @ApiOperation({ summary: 'Updated a Department' })
  @ApiParam({ name: 'code', required: true })
  @Put(':code')
  async update(@Param() params, @Body() body: UpdateCollaboratorDto) {
    this._collaboratorService.update(params.code, body);
  }

  @ApiOperation({ summary: 'Deleted a Collaborator' })
  @ApiParam({ name: 'code', required: true })
  @Delete(':code')
  async remove(@Param() params) {
    this._collaboratorService.remove(params.code);
  }
}
