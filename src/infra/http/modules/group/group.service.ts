import { Injectable } from '@nestjs/common';
import { CreateGroupUseCase } from 'src/application/usecases/group';

@Injectable()
export class GroupService {
  constructor(private _createGroupUseCase: CreateGroupUseCase) {}

  async createGroup(input: any): Promise<void> {
    return this._createGroupUseCase.execute(input);
  }
}
