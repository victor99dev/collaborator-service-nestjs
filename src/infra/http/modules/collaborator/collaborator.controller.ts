import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import {
  RegisterCollaboratorDto,
  UpdateCollaboratorDto,
} from '../../dtos/collaborators';
import {
  HttpExceptionExistingLogin,
  HttpExceptionNotFound,
} from '../../exeptions';

@ApiTags('Collaborator')
@Controller({
  path: 'collaborators',
})
export class CollaboratorController {
  constructor(private readonly _collaboratorService: CollaboratorService) {}

  @ApiOperation({ summary: 'Create a new Collaborator' })
  @UseFilters()
  @Post('')
  async registerNewCollaborator(@Body() body: RegisterCollaboratorDto) {
    const create = this._collaboratorService.createCollaborator({
      ...body,
    });
    return create;
  }

  @ApiOperation({ summary: 'List Collaborator' })
  @Get('list')
  async getAll() {
    const getCollaboratorAll = await this._collaboratorService.getAll();
    return getCollaboratorAll;
  }

  @ApiOperation({ summary: 'Get Collaborator by code' })
  @ApiParam({ name: 'code', required: true })
  @UseFilters(HttpExceptionNotFound)
  @Get(':code')
  async findByCode(@Param() params) {
    const getCollaboratorById = await this._collaboratorService.findByCode({
      code: params.code,
    });

    return getCollaboratorById;
  }

  @ApiOperation({ summary: 'Get Collaborator by login' })
  @ApiParam({ name: 'login', required: true })
  @UseFilters(HttpExceptionNotFound)
  @Get('login/:login')
  async findByLogin(@Param() params) {
    const getCollaboratorByLogin = await this._collaboratorService.findByLogin({
      login: params.login,
    });

    return getCollaboratorByLogin;
  }

  @ApiOperation({ summary: 'Updated a Department' })
  @ApiParam({ name: 'code', required: true })
  @UseFilters(HttpExceptionNotFound)
  @Put(':code')
  async update(@Param() params, @Body() body: UpdateCollaboratorDto) {
    const updateCollaborator = this._collaboratorService.update(
      params.code,
      body,
    );

    return updateCollaborator;
  }

  @ApiOperation({ summary: 'Deleted a Collaborator' })
  @ApiParam({ name: 'code', required: true })
  @UseFilters(HttpExceptionNotFound)
  @Delete(':code')
  async remove(@Param() params) {
    const deleteCollaborator = this._collaboratorService.remove(params.code);

    return deleteCollaborator;
  }
}
