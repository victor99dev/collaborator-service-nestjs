import { Injectable } from '@nestjs/common';
import {
  CreateCollaboratorUseCase,
  DeleteCollaboratorUseCase,
  GetCollaboratorByCodeInput,
  GetCollaboratorByCodeOutput,
  GetCollaboratorByCodeUseCase,
  ListCollaboratorOutput,
  ListCollaboratorUseCase,
} from 'src/application/usecases/collaborator';

@Injectable()
export class CollaboratorService {
  constructor(
    private _createCollaboratorUseCase: CreateCollaboratorUseCase,
    private _listCollaboratorUseCase: ListCollaboratorUseCase,
    private _getByCodeCollaborator: GetCollaboratorByCodeUseCase,
    private _deleteCollaborator: DeleteCollaboratorUseCase,
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
    return this._getByCodeCollaborator.execute(input);
  }

  update(code, input: any): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async remove(code): Promise<void> {
    return this._deleteCollaborator.execute(code);
  }
}
