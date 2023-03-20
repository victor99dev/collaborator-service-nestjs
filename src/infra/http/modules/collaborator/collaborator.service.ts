import { Injectable } from '@nestjs/common';
import { CreateCollaboratorUseCase } from 'src/application/usecases/collaborator';

@Injectable()
export class CollaboratorService {
  constructor(private _createCollaboratorUseCase: CreateCollaboratorUseCase) {}

  async createCollaborator(input: any): Promise<void> {
    return this._createCollaboratorUseCase.execute(input);
  }
}
