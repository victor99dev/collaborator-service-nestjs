import { Injectable } from '@nestjs/common';
import {
  CreateCollaboratorUseCase,
  DeleteCollaboratorUseCase,
  GetCollaboratorByCodeInput,
  GetCollaboratorByCodeOutput,
  GetCollaboratorByCodeUseCase,
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
    private _updateCollaboratorUseCase: UpdateCollaboratorUseCase,
    private _deleteCollaboratorUseCase: DeleteCollaboratorUseCase,
  ) {}

  async createCollaborator(input: any): Promise<void> {
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
}
