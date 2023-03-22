import { Injectable } from '@nestjs/common';
import {
  CreateCollaboratorUseCase,
  ListCollaboratorOutput,
  ListCollaboratorUseCase,
} from 'src/application/usecases/collaborator';

@Injectable()
export class CollaboratorService {
  constructor(
    private _createCollaboratorUseCase: CreateCollaboratorUseCase,
    private _listCollaboratorUseCase: ListCollaboratorUseCase,
  ) {}

  async createCollaborator(input: any): Promise<void> {
    return this._createCollaboratorUseCase.execute(input);
  }

  async getAll(): Promise<ListCollaboratorOutput> {
    return await this._listCollaboratorUseCase.execute();
  }
}
