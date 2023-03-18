import { Injectable } from '@nestjs/common';
import {
  CreateGroupUseCase,
  ListGroupOutput,
  ListGroupUseCase,
} from 'src/application/usecases/group';

@Injectable()
export class GroupService {
  constructor(
    private _createGroupUseCase: CreateGroupUseCase,
    private _lisGroupUseCase: ListGroupUseCase,
  ) {}

  async createGroup(input: any): Promise<void> {
    return this._createGroupUseCase.execute(input);
  }

  async getAll(): Promise<ListGroupOutput> {
    return this._lisGroupUseCase.execute();
  }
}
