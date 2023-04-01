import { Injectable } from '@nestjs/common';
import {
  CollaboratorOutput,
  CreateCollaboratorUseCase,
  DeleteCollaboratorUseCase,
  GetCollaboratorByCodeInput,
  GetCollaboratorByCodeOutput,
  GetCollaboratorByCodeUseCase,
  GetCollaboratorByLoginInput,
  GetCollaboratorByLoginOutput,
  GetCollaboratorByLoginUseCase,
  ListCollaboratorOutput,
  ListCollaboratorUseCase,
  UpdateCollaboratorUseCase,
} from 'src/application/usecases/collaborator';

@Injectable()
export class CollaboratorService {
  constructor(
    private _createCollaboratorUseCase: CreateCollaboratorUseCase,
    private _listCollaboratorUseCase: ListCollaboratorUseCase,
    private _getByCodeCollaboratorUseCase: GetCollaboratorByCodeUseCase,
    private _getByLoginCollaboratorUseCase: GetCollaboratorByLoginUseCase,
    private _updateCollaboratorUseCase: UpdateCollaboratorUseCase,
    private _deleteCollaboratorUseCase: DeleteCollaboratorUseCase,
  ) {}

  async createCollaborator(input: any): Promise<CollaboratorOutput> {
    return this._createCollaboratorUseCase.execute(input);
  }

  async getAll(): Promise<ListCollaboratorOutput> {
    return await this._listCollaboratorUseCase.execute();
  }

  async findByCode(
    input: GetCollaboratorByCodeInput,
  ): Promise<GetCollaboratorByCodeOutput> {
    return this._getByCodeCollaboratorUseCase.execute(input);
  }

  async update(code, input: any): Promise<void> {
    return this._updateCollaboratorUseCase.execute(code, input);
  }

  async remove(code): Promise<void> {
    return this._deleteCollaboratorUseCase.execute(code);
  }

  async findByLogin(
    input: GetCollaboratorByLoginInput,
  ): Promise<GetCollaboratorByLoginOutput> {
    return this._getByLoginCollaboratorUseCase.execute(input);
  }
}
